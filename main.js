
const dragItems = document.querySelectorAll(".drag-item")

const areaItems = document.querySelectorAll(".drop-area-item")


for( let myDrag of dragItems){

    myDrag.ondragstart = function(e){

        // e.dataTransfer.setData("ayxan", this.id)

        var myID = this.id

        myID=myID.slice(4)
        // console.log(myID)

        myDrag.style.background="red"

        e.dataTransfer.setData("newID", myID)
    }


    myDrag.ondragend = function(){
        this.style.background="transparent"
    }



    for( let myDrop of areaItems){

        myDrop.ondragover = function(e){
            e.preventDefault()
            // const minVal = myDrop.getAttribute("min")
            // const maxVal = myDrop.getAttribute("max")
        }


        myDrop.ondrop = function(a){
            a.preventDefault()
            const minVal = Number(myDrop.getAttribute("min"))
            const maxVal = Number(myDrop.getAttribute("max"))


            const dragID = Number(a.dataTransfer.getData("newID"))
            console.log(dragID)
            console.log(minVal, maxVal)

            debugger;
            if(dragID>=minVal && dragID<=maxVal){

                const dragItems = document.getElementById("drag" + dragID)
                this.appendChild(dragItems)
            }
        }
       

    }




}