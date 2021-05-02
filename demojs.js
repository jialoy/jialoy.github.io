Array.prototype.randomShuffle = function() {
    // random shuffle array
    let i = this.length, j, temp;
    if ( i == 0 ) return this;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

Array.prototype.randomElement = function () {
    // select random element from array
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.randomElementSplice = function() {
    // select and remove random element from arary
    // return selected element
	return this.splice(Math.floor(Math.random()*arr.length), 1)[0];
};

Array.prototype.removeElement = function() {
  // remove specific element (by it's value) from an array
  // return modified array
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


function displayImg(parentId, className, imgId, src, imgWidth, imgHeight, xPos, yPos) {
    var img = document.createElement("img");
    img.id = imgId;
    img.src = src;
    img.className = className;
    img.width = imgWidth;
    img.height = imgHeight;
    img.style.position = "absolute";
    img.style.left = toPx(xPos);
    img.style.top = toPx(yPos);
    
    document.getElementById(parentId).appendChild(img);
}

function toPx(num) {
    var pixels = num.toString()+"px";
    return pixels;
}

function checkRemoveElem(elemId, parentId) {
    // check if parentId contains child element and remove if so
    if (document.getElementById(parentId).contains(document.getElementById(elemId))) {
        document.getElementById(elemId).remove();
    }
}

function displayAvatars(cond) {
    if (cond=="diff") {
        displayImg("bottomDiv", "self", "avatarO", "images/avatarO.png", 100, 100, 0, 0);
        displayImg("topDiv", "target", "avatarG", "images/avatarG.png", 100, 100, 0, 0);
    } else if (cond=="shared") {
        displayImg("bottomDivWide", "self", "avatarO", "images/avatarO.png", 100, 100, 100, 0);
        displayImg("bottomDivWide", "target", "avatarG", "images/avatarG.png", 100, 100, 0, 0);
    }
}

function removeAvatars() {
    avatarArr = ["avatarO", "avatarG"];
    for (let i=0; i<avatarArr.length; i++) {
        checkRemoveElem(avatarArr[i], "wrapper");
    }
}

function startImages() {
    displayAvatars("diff");
    displayImg("imgDivTop", "draggable", "a", "images/bunny.png", 150, 150, 0, 0);
    displayImg("imgDivBottom", "draggable", "b", "images/mouse.png", 150, 150, 0, 0);
    displayImg("imgDivLeft", "draggable", "c", "images/chick.png", 150, 150, 0, 0);
    displayImg("imgDivRight", "draggable", "d", "images/tortoise.png", 150, 150, 0, 0);
}

function resetImages() {
    var cond = ["shared", "diff"].randomElement();
    displayAvatars(cond);
    imgArr = ["images/mouse.png", "images/bunny.png", "images/chick.png", "images/tortoise.png"];
    displayImg("imgDivTop", "draggable", "a", imgArr.randomElement(), 150, 150, 0, 0);
    displayImg("imgDivBottom", "draggable", "b", imgArr.randomElement(), 150, 150, 0, 0);
    displayImg("imgDivLeft", "draggable", "c", imgArr.randomElement(), 150, 150, 0, 0);
    displayImg("imgDivRight", "draggable", "d", imgArr.randomElement(), 150, 150, 0, 0);
    eventHandler();
}

let currentDroppable = null;

startImages();


function enterDroppable(elem, images) {
    console.log("dropped");
    for (let i=0; i<images.length; i++) {
        checkRemoveElem(images[i].id, "wrapper");
    }
    removeAvatars();
    setTimeout(function() {
        resetImages();
    }, 150);
}

function leaveDroppable(elem, images) {
    console.log("left");
}

function trial(trialIdx, images) {
    console.log("trial start");
    for (let i=0; i<images.length; i++) {
        applyDrag(images[i], images, trialIdx);
    }
}


function applyDrag(elem, images, trialIdx) {
    elem.onmousedown = function(event) {
        elem.ondragstart = function(e) {
            return false;
        };
    
        let shiftX = event.clientX - elem.getBoundingClientRect().left;
        let shiftY = event.clientY - elem.getBoundingClientRect().top;
        
        //let rightEdge = document.documentElement.clientWidth - elem.offsetWidth;
        //let bottomEdge = document.documentElement.clientHeight - elem.offsetHeight;
        let rightEdge = document.getElementById("wrapper").offsetWidth - elem.offsetWidth;
        let bottomEdge = document.getElementById("wrapper").offsetHeight - elem.offsetHeight
        
        
        //bunny.style.position = 'absolute';
        //elem.style.zIndex = 1000;
        document.getElementById("wrapper").append(elem);
        
        moveAt(event.pageX, event.pageY);
        
        function moveAt(pageX, pageY) {
            elem.style.left = pageX - shiftX + "px";
            elem.style.top = pageY - shiftY + 'px';
            
            let newLeft = pageX - shiftX;
            let newTop = pageY - shiftY;
            
            if (newLeft < 0) {
                newLeft = 0;
            }
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            if (newTop < 0) {
                newTop = 0;
            }
            if (newTop > bottomEdge) {
                newTop = bottomEdge;
            }
            
            elem.style.left = newLeft + 'px';
            elem.style.top = newTop + 'px';
        }
        
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
            elem.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            elem.hidden = false;
            
            if (!elemBelow) return;
            
            let droppableBelow = elemBelow.closest(".target");
            
            if (currentDroppable != droppableBelow) {
                //if (currentDroppable) {
                //    leaveDroppable(currentDroppable, images);
                //}
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    document.removeEventListener('mousemove', onMouseMove);
                    enterDroppable(currentDroppable, images);
                }
            }
        }
        
        document.addEventListener('mousemove', onMouseMove);
        
        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            //document.onmouseup = null;
        };
    };
}


var eventHandler = (function() {
    var trialIdx = 0;
    
    
    return function() {
    
        console.log(trialIdx);
        let images = document.querySelectorAll(".draggable");
        console.log(images);
        
        trial(trialIdx, images);
        
        if (trialIdx==100) {
            window.location.href="https://www.google.com";
        } else {
            trialIdx++;
        }
    };
}());

eventHandler();