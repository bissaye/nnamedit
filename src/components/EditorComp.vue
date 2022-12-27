<template>
    <div class="editor" id="Editor">
        <h1>
            Editeur
        </h1>

        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
    <hr>
        <ul>
        <li v-for="word in  Object.keys(corrections)" :key="word">
        <label :for="word">{{word}}</label>&nbsp;
            <select :id="word" @change="rectify">
            <option value="">selectionner un mot</option>
            <option v-for="item in corrections[word]" :key="item" :value="item">{{item}}</option>
            </select>
        </li>
        </ul>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
var striptags = require('striptags');

export default {
    name: 'EditorComp',

    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Ecrire ici</p>',
            editorDataStrip: '',
            editorConfig: {},
            corrections: {}
        };
    },

    computed: {
        editorInput() {
            return this.editorData
        }
    },

    methods: {
        getData() {
            this.editorDataStrip = striptags(this.editorData).split(" ")
            this.editorDataStrip = this.editorDataStrip.map(item => item.replaceAll("&nbsp;", " ")).map(item => item.trim()).filter(item => item !== "");
        },
        getCorrections() {
            this.corrections = {}
            this.editorDataStrip.forEach(word => {
                if (this.$store.state.dico.indexOf(word) < 0) {
                    let propositions = this.searchCorrection(word)
                    if (propositions.length > 0) {
                        this.corrections[word] = propositions
                    }
                }
            })
        },
        searchCorrection(word) {
            return this.$store.state.dico.filter((wordCorrect) => wordCorrect.toLowerCase().includes(word.toLowerCase()))
        },
        rectify(e) {
            this.editorData = this.editorData.replaceAll(e.target.id, e.target.value)
            delete this.corrections[e.target.id]
        }
    },

    watch: {
        editorInput() {
            this.getData()
            this.getCorrections()
        }
    }
}
</script>

<style>
    .editor{
        width: 100%;
        height: 100%;
    }

    .editor h1{
        color: rgb(3, 41, 93);
        text-align: center;
    }
</style>