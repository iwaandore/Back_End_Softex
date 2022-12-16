const entrada = require('prompt-sync')({ sigint: true })

class Editor {
    constructor() {
        this.observers = [];
    }
}

class TextEditor extends Editor {
    Text = []
    insertLine(lineNumber, text) {
        var LineNumber = lineNumber;
        var Text = text;
        this.notify('open\n')
        while (LineNumber == 'EOF' || texto != 'EOF') {
            var LineNumber = Number(entrada('Linha que deseja inserir: '))
            var texto = String(entrada('Texto que deseja inserir: '))

            if (LineNumber == 'EOF' || texto == 'EOF') {
                break
            }
            this.Text.splice(LineNumber, 0, texto)
            console.log(this.Text)
        }
        this.notify('save\n')
    }

    removeLine(lineNumber) {
        this.notify('open')
        var LineNumber = Number(entrada('Linha que deseja escruir: '))

        this.Text.splice(LineNumber, 1)
        console.log(this.Text)
        this.notify('save')
    }

    subscribe(a) {
        this.observers.push(a)
    }
    unsubscript(a) {
        this.observers = this.observers.filter(subscriber => subscriber !== a)
    }
    notify(data) {
        this.observers.forEach(observer => observer(data))
    }
}
function observador(data) {
    const observer = data
    console.log(observer)
}
const insert = new TextEditor()
insert.subscribe(observador)
insert.insertLine('', '')
insert.removeLine('')

