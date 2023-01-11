<template>
    <h1>
        Editeur
    </h1>
    <div class="editor" id="Editor">
        <Editor v-model="editorData" api-key='3a0wdpq2cp4p9e7pti3oyup6kxz8ik5relcwedb404evexss' :init="{
				plugins: [
					'advlist autolink lists link image charmap print preview anchor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table paste code help wordcount',
				],
				toolbar:
					'undo redo | formatselect | bold italic backcolor fullscreen | print save | \
									alignleft aligncenter alignright alignjustify image | \
									bullist numlist outdent indent | removeformat | help',
        }"></Editor>
        <div class="correction">
            <ul>
                <li v-for="word in  Object.keys(corrections)" :key="word">
                    <label :for="word">{{ word }}</label>&nbsp;
                    <select :id="word" @change="rectify">
                        <option value="">selectionner un mot</option>
                        <option v-for="item in corrections[word]" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import Editor from '@tinymce/tinymce-vue';
var striptags = require('striptags');

export default {
    name: 'EditorComp',
    components:{
        Editor
    },
    data() {
        return {
            editorData: 'Ecrire ici',
            editorDataStrip: '',
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
                    let propositions = this.removeOccurence(this.searchCorrection(word))
                    if (propositions.length > 0) {
                        this.corrections[word] = propositions
                    }
                }
            })
        },
        searchCorrection(word) {
            return this.$store.state.dico.filter((wordCorrect) => wordCorrect.toLowerCase().includes(word.toLowerCase()))
        },
        removeOccurence(table){
            let temp = [];
            let arr = [];
            arr = table.filter(
                (e) => {
                    const last = table.lastIndexOf(e);
                    const first = table.indexOf(e);
                    if(!(last===first)){
                        if(temp.indexOf(e) < 0){
                            temp.push(e)
                        }
                    }
                    return last===first
                }
            )
            arr.push(...temp)
            return arr
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
.editor {
    width: 100%;
    height: 100%;
}

 h1 {
    color: rgb(3, 41, 93);
    text-align: center;
}
</style>    