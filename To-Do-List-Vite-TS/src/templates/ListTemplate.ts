import FullList from "../models/FullList";

interface DOMList{
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void
}

export default class ListTemplate implements DOMList{
    ul: HTMLUListElement
    static instance: ListTemplate = new ListTemplate()
    private constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }
    clear(): void {
        this.ul.innerHTML = ''
    }
    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(item=>{
            const li: HTMLLIElement = document.createElement("li")
            li.className ='item'
            const checkbox = document.createElement("input") as HTMLInputElement
            checkbox.type = "checkbox"
            checkbox.checked = item.checked
            checkbox.tabIndex = 0
            checkbox.id = item.id
            li.append(checkbox)
            checkbox.addEventListener("change", ()=>{
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent =item.item
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.textContent = "X"
            button.className = "button"
            li.append(button)

            button.addEventListener("click", ()=>{
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.append(li)
        })
    }
}