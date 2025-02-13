(()=>{"use strict";var e={564:(e,n,t)=>{t.d(n,{A:()=>p});var o=t(354),r=t.n(o),A=t(314),a=t.n(A),d=t(417),i=t.n(d),c=new URL(t(570),t.b),l=a()(r()),s=i()(c);l.push([e.id,`.modal-add-project, #modal-edit-project{\n    height: 500px;\n    width: 300px;\n    border-radius: 20px;\n    margin: 100px auto auto auto;\n}\n.modal-add-project>form, #modal-edit-project>form{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 20px;\n    gap: 15px;\n}\n.close-modal{\n    margin-bottom: 30px;\n    margin-left: auto;\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-image: url(${s});\n    cursor: pointer;\n}\n.modal-add-project>form div, #modal-edit-project>form div{\n    width: 100%;\n}\n#project-name, #edit-project-name{\n    width: 100%;\n    height: 25px;\n}\n#project-desc, #edit-project-desc{\n    width: 100%;\n    height: 200px;\n    resize: none;\n}\n#project-name, #project-desc, #edit-project-name, #edit-project-desc{\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #514e4e;\n}\n.modal-add-project>form label, #modal-edit-project>form label{\n    font-weight: 700;\n}\n\n\n\n\n.modal-add-todo{\n    height: 320px;\n    width: 700px;\n    padding: 20px 15px;\n    margin: 200px auto auto auto;\n    border-radius: 20px;\n}\n.modal-add-todo>form{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n.modal-btn-add{\n    margin-top: auto;\n    padding: 5px;\n    cursor: pointer;\n}\n\n#close-todo-modal{\n    display: block;\n    margin-bottom: 0;\n}\n.modal-add-todo>form>div:first-child{\n    flex-basis: 100%;\n    height: 0px;\n    margin-bottom: 20px;\n}\n.modal-add-todo>form>div:nth-child(4){\n    flex-basis: 100%;\n}\n.modal-add-todo>form>fieldset{\n    flex-basis: 100%;\n    padding: 5px;\n}\n.modal-add-todo input[type = 'text']{\n    padding: 5px ;\n    font-size: 1rem;\n}\n#todo-note{\n    width: 100%;\n}\n#todo-name{\n    width: 300px;\n}\n.modal-add-todo>form>div:nth-child(2){\n    margin-right: auto;\n}\n#modal-btn-add-todo{\n    margin-top: 10px;\n}\n\n#low{\n    accent-color: green;\n}\n#medium{\n    accent-color: yellow;\n}\n#high{\n    accent-color: #c46a59;\n}\n\n#confirm-delete{\n    padding: 10px;\n    margin-left: auto;\n    border-radius: 15px;\n}\n#confirm-delete h3{\n    margin-bottom: 10px;\n}\n#confirm-delete button{\n    padding: 2px 5px;\n}`,"",{version:3,sources:["webpack://./src/modal.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,yDAA8C;IAC9C,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,YAAY;AAChB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;;;;;AAKA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,eAAe;IACf,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB",sourcesContent:[".modal-add-project, #modal-edit-project{\n    height: 500px;\n    width: 300px;\n    border-radius: 20px;\n    margin: 100px auto auto auto;\n}\n.modal-add-project>form, #modal-edit-project>form{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 20px;\n    gap: 15px;\n}\n.close-modal{\n    margin-bottom: 30px;\n    margin-left: auto;\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-image: url(./asset/icons/close.svg);\n    cursor: pointer;\n}\n.modal-add-project>form div, #modal-edit-project>form div{\n    width: 100%;\n}\n#project-name, #edit-project-name{\n    width: 100%;\n    height: 25px;\n}\n#project-desc, #edit-project-desc{\n    width: 100%;\n    height: 200px;\n    resize: none;\n}\n#project-name, #project-desc, #edit-project-name, #edit-project-desc{\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #514e4e;\n}\n.modal-add-project>form label, #modal-edit-project>form label{\n    font-weight: 700;\n}\n\n\n\n\n.modal-add-todo{\n    height: 320px;\n    width: 700px;\n    padding: 20px 15px;\n    margin: 200px auto auto auto;\n    border-radius: 20px;\n}\n.modal-add-todo>form{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n.modal-btn-add{\n    margin-top: auto;\n    padding: 5px;\n    cursor: pointer;\n}\n\n#close-todo-modal{\n    display: block;\n    margin-bottom: 0;\n}\n.modal-add-todo>form>div:first-child{\n    flex-basis: 100%;\n    height: 0px;\n    margin-bottom: 20px;\n}\n.modal-add-todo>form>div:nth-child(4){\n    flex-basis: 100%;\n}\n.modal-add-todo>form>fieldset{\n    flex-basis: 100%;\n    padding: 5px;\n}\n.modal-add-todo input[type = 'text']{\n    padding: 5px ;\n    font-size: 1rem;\n}\n#todo-note{\n    width: 100%;\n}\n#todo-name{\n    width: 300px;\n}\n.modal-add-todo>form>div:nth-child(2){\n    margin-right: auto;\n}\n#modal-btn-add-todo{\n    margin-top: 10px;\n}\n\n#low{\n    accent-color: green;\n}\n#medium{\n    accent-color: yellow;\n}\n#high{\n    accent-color: #c46a59;\n}\n\n#confirm-delete{\n    padding: 10px;\n    margin-left: auto;\n    border-radius: 15px;\n}\n#confirm-delete h3{\n    margin-bottom: 10px;\n}\n#confirm-delete button{\n    padding: 2px 5px;\n}"],sourceRoot:""}]);const p=l},365:(e,n,t)=>{t.d(n,{A:()=>y});var o=t(354),r=t.n(o),A=t(314),a=t.n(A),d=t(417),i=t.n(d),c=new URL(t(165),t.b),l=new URL(t(685),t.b),s=new URL(t(42),t.b),p=new URL(t(530),t.b),u=new URL(t(944),t.b),m=new URL(t(791),t.b),C=new URL(t(413),t.b),g=a()(r()),f=i()(c),B=i()(l),h=i()(s),I=i()(p),x=i()(u),v=i()(m),b=i()(C);g.push([e.id,`@font-face {\n    font-family: pattaya;\n    src: url(${f}) format('woff2'),\n         url(${B}) format('woff');\n}\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n:root{\n    --primary : #fff8f6;\n    --secondary : #FFE8E1;\n    --tertiary : #514e4e;\n    --color-four : #d9d6d6;\n    --low : #a5bb62;\n    --medium : #e3da2e;\n    --high : #c46a59;\n}\nbody{\n    display: grid;\n    height: 100vh;\n    grid-template: 1fr / auto 1fr;\n}\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    padding: 0 20px;\n    background-color: var(--primary);\n    border-right: 1px solid var(--tertiary);\n}\n.sidebar>header{\n    display: flex;\n    align-items: center;\n    height: 80px;\n    font-size: 2.5rem;\n    font-weight: 900;\n    font-family: pattaya;\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n.project-container-title{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n.project-container-title>div:first-child{\n    font-size: 1.3rem;\n    font-weight: 600;\n}\n.add-project{\n    min-width: 25px;\n    min-height: 25px;\n    border-radius: 100%;\n    cursor: pointer;\n    border: 2px solid var(--tertiary);\n    background-color: white;\n    background-image: url(${h});\n}\n.project{\n    text-align: left;\n    padding: 5px 10px;\n    border-radius: 8px;\n    background-color: white;\n    border: 0.5px solid var(--tertiary);\n    color: var(--tertiary);\n    cursor: pointer;\n}\n.project:hover, .add-project:hover{\n    background-color: var(--secondary);\n    border: none;\n    font-weight: 800;\n    outline: 2px solid var(--tertiary);\n}\n.add-project:active{\n    background-color: var(--primary);\n    outline: 0.5px solid var(--tertiary);\n}\n.project:active{\n    border: none;\n    outline: 0.5px solid var(--tertiary);\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 40px;\n}\n.project-controls{\n    height: 30px;\n    text-align: right;\n}\n.project-controls button{\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n}\n.project-info{\n    height: 15%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n}\n.project-info>header{\n    font-size: 3rem;\n}\n.project-info>div{\n    color: var(--tertiary);\n    padding-left: 2px;\n    overflow-y: auto;\n}\n.delete-project{\n    margin-left: 10px;\n    background-image: url(${I});\n}\n.edit-project{\n    background-image: url(${x});\n}\n.delete-project, .edit-project{\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n.delete-project:active{\n    background-image: url(${v});\n}\n.edit-project:active{\n    background-image: url(${b});\n}\n\n.todo-card{\n    height: 70px;\n    border-top: 1px solid var(--color-four);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2px;\n    margin-left: 10px;\n}\n.top-row, .bottom-row{\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n.bottom-row{\n    padding-left: 44px;\n    font-size: 0.9rem;\n    color: var(--tertiary);\n}\n.top-row button{\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    cursor: pointer;\n    background-color: white;\n}\n.list-done{\n    margin-right: 10px;\n    border: 2px solid var(--tertiary);\n}\n.list-title{\n    font-size: 1.3rem;\n    font-weight: 600;\n    line-height: 100%;\n}\n.delete-project:hover, .edit-project:hover{\n    border: 0.5px solid lightgray;\n}\n\n.list-add{\n    height: 60px;\n    display: inline-flex;\n    align-items: center;\n    padding: 0 20px 0 0;\n    gap: 18px;\n    cursor: pointer;\n    color: var(--tertiary);\n    user-select: none;\n    border-top: 1px solid var(--color-four);\n    margin-left: 10px;\n}\n.list-add>span{\n    line-height: 100%;\n}\n.add-svg{\n    height: 30px;\n    width: 30px;\n}\n.list-add:hover{\n    color: black;\n    .add-svg{\n        fill: #ec8a27;\n    }\n}\n.list-add:active{\n    color: var(--tertiary);\n    .add-svg{\n        fill: #f7b16b;\n    }\n}\n.low{\n    border: 2px solid var(--low);\n}\n.medium{\n    border: 2px solid var(--medium);\n}\n.high{\n    border: 2px solid var(--high);\n}\n.low:hover{\n    border: 4px solid var(--low);\n}\n.medium:hover{\n    border: 4px solid var(--medium);\n}\n.high:hover{\n    border: 4px solid var(--high);\n}\n.low:active{\n    background-color: var(--low);\n}\n.medium:active{\n    background-color: var(--medium);\n}\n.high:active{\n    background-color: var(--high);\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,oBAAoB;IACpB;+DACmE;AACvE;AACA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;IACpB,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,gCAAgC;IAChC,uCAAuC;AAC3C;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;IACjC,uBAAuB;IACvB,yDAA6C;AACjD;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,mCAAmC;IACnC,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kCAAkC;IAClC,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;AACtC;AACA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;AACA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,yDAAuD;AAC3D;AACA;IACI,yDAAuD;AAC3D;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,yDAA+C;AACnD;AACA;IACI,yDAA+C;AACnD;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;IACR,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,sBAAsB;IACtB,iBAAiB;IACjB,uCAAuC;IACvC,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,YAAY;IACZ;QACI,aAAa;IACjB;AACJ;AACA;IACI,sBAAsB;IACtB;QACI,aAAa;IACjB;AACJ;AACA;IACI,4BAA4B;AAChC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,6BAA6B;AACjC",sourcesContent:["@font-face {\n    font-family: pattaya;\n    src: url(./asset/fonts/pattaya-regular-webfont.woff2) format('woff2'),\n         url(./asset/fonts/pattaya-regular-webfont.woff) format('woff');\n}\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n:root{\n    --primary : #fff8f6;\n    --secondary : #FFE8E1;\n    --tertiary : #514e4e;\n    --color-four : #d9d6d6;\n    --low : #a5bb62;\n    --medium : #e3da2e;\n    --high : #c46a59;\n}\nbody{\n    display: grid;\n    height: 100vh;\n    grid-template: 1fr / auto 1fr;\n}\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    padding: 0 20px;\n    background-color: var(--primary);\n    border-right: 1px solid var(--tertiary);\n}\n.sidebar>header{\n    display: flex;\n    align-items: center;\n    height: 80px;\n    font-size: 2.5rem;\n    font-weight: 900;\n    font-family: pattaya;\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n.project-container-title{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n.project-container-title>div:first-child{\n    font-size: 1.3rem;\n    font-weight: 600;\n}\n.add-project{\n    min-width: 25px;\n    min-height: 25px;\n    border-radius: 100%;\n    cursor: pointer;\n    border: 2px solid var(--tertiary);\n    background-color: white;\n    background-image: url(./asset/icons/plus.svg);\n}\n.project{\n    text-align: left;\n    padding: 5px 10px;\n    border-radius: 8px;\n    background-color: white;\n    border: 0.5px solid var(--tertiary);\n    color: var(--tertiary);\n    cursor: pointer;\n}\n.project:hover, .add-project:hover{\n    background-color: var(--secondary);\n    border: none;\n    font-weight: 800;\n    outline: 2px solid var(--tertiary);\n}\n.add-project:active{\n    background-color: var(--primary);\n    outline: 0.5px solid var(--tertiary);\n}\n.project:active{\n    border: none;\n    outline: 0.5px solid var(--tertiary);\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    padding: 20px 40px;\n}\n.project-controls{\n    height: 30px;\n    text-align: right;\n}\n.project-controls button{\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n}\n.project-info{\n    height: 15%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-bottom: 5px;\n}\n.project-info>header{\n    font-size: 3rem;\n}\n.project-info>div{\n    color: var(--tertiary);\n    padding-left: 2px;\n    overflow-y: auto;\n}\n.delete-project{\n    margin-left: 10px;\n    background-image: url(./asset/icons/delete-outline.svg);\n}\n.edit-project{\n    background-image: url(./asset/icons/pencil-outline.svg);\n}\n.delete-project, .edit-project{\n    border: none;\n    background-color: white;\n    cursor: pointer;\n}\n.delete-project:active{\n    background-image: url(./asset/icons/delete.svg);\n}\n.edit-project:active{\n    background-image: url(./asset/icons/pencil.svg);\n}\n\n.todo-card{\n    height: 70px;\n    border-top: 1px solid var(--color-four);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2px;\n    margin-left: 10px;\n}\n.top-row, .bottom-row{\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n.bottom-row{\n    padding-left: 44px;\n    font-size: 0.9rem;\n    color: var(--tertiary);\n}\n.top-row button{\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    cursor: pointer;\n    background-color: white;\n}\n.list-done{\n    margin-right: 10px;\n    border: 2px solid var(--tertiary);\n}\n.list-title{\n    font-size: 1.3rem;\n    font-weight: 600;\n    line-height: 100%;\n}\n.delete-project:hover, .edit-project:hover{\n    border: 0.5px solid lightgray;\n}\n\n.list-add{\n    height: 60px;\n    display: inline-flex;\n    align-items: center;\n    padding: 0 20px 0 0;\n    gap: 18px;\n    cursor: pointer;\n    color: var(--tertiary);\n    user-select: none;\n    border-top: 1px solid var(--color-four);\n    margin-left: 10px;\n}\n.list-add>span{\n    line-height: 100%;\n}\n.add-svg{\n    height: 30px;\n    width: 30px;\n}\n.list-add:hover{\n    color: black;\n    .add-svg{\n        fill: #ec8a27;\n    }\n}\n.list-add:active{\n    color: var(--tertiary);\n    .add-svg{\n        fill: #f7b16b;\n    }\n}\n.low{\n    border: 2px solid var(--low);\n}\n.medium{\n    border: 2px solid var(--medium);\n}\n.high{\n    border: 2px solid var(--high);\n}\n.low:hover{\n    border: 4px solid var(--low);\n}\n.medium:hover{\n    border: 4px solid var(--medium);\n}\n.high:hover{\n    border: 4px solid var(--high);\n}\n.low:active{\n    background-color: var(--low);\n}\n.medium:active{\n    background-color: var(--medium);\n}\n.high:active{\n    background-color: var(--high);\n}"],sourceRoot:""}]);const y=g},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,A){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&a[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(r," */");return[n].concat([A]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var A={},a=[],d=0;d<e.length;d++){var i=e[d],c=o.base?i[0]+o.base:i[0],l=A[c]||0,s="".concat(c," ").concat(l);A[c]=l+1;var p=t(s),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var m=r(u,o);o.byIndex=d,n.splice(d,0,{identifier:s,updater:m,references:1})}a.push(s)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var A=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<A.length;a++){var d=t(A[a]);n[d].references--}for(var i=o(e,r),c=0;c<A.length;c++){var l=t(A[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}A=i}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},685:(e,n,t)=>{e.exports=t.p+"92a0df7001162aa0b47b.woff"},165:(e,n,t)=>{e.exports=t.p+"bec9d69bcc8aa180a2e7.woff2"},570:(e,n,t)=>{e.exports=t.p+"97d4c0a10ac97607dc65.svg"},530:(e,n,t)=>{e.exports=t.p+"de0bb67a90c508546224.svg"},791:(e,n,t)=>{e.exports=t.p+"bde675c38d54979f589e.svg"},944:(e,n,t)=>{e.exports=t.p+"c11ca64583db9195885d.svg"},413:(e,n,t)=>{e.exports=t.p+"8d317290131028fe10cf.svg"},42:(e,n,t)=>{e.exports=t.p+"3cffe9a515498593b872.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var A=n[o]={id:o,exports:{}};return e[o](A,A.exports,t),A.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.d({},{W:()=>L});var o=t(72),r=t.n(o),A=t(825),a=t.n(A),d=t(659),i=t.n(d),c=t(56),l=t.n(c),s=t(540),p=t.n(s),u=t(113),m=t.n(u),C=t(365),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(C.A,g),C.A&&C.A.locals&&C.A.locals;var f=t(564),B={};B.styleTagTransform=m(),B.setAttributes=l(),B.insert=i().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=p(),r()(f.A,B),f.A&&f.A.locals&&f.A.locals;const h=function(){let e=[];return{addProjectToContainer:function(n,t){e.push(new I(n,t)),L()},addTodoToProject:function(n,t,o,r,A){e[n].addT(t,o,r,A),L()},removeTodoFromProject:function(n,t){e[n].removeT(t),L()},removeProject:function(n){e.splice(n,1),L()},editProject:function(n,t,o){e[n].projectName=t,e[n].description=o,L()},array:e}}();class I{constructor(e,n){this.projectName=e,this.description=n,this.todoList=[]}addT(e,n,t,o){this.todoList.push(new x(e,n,t,o))}removeT(e){this.todoList.splice(e,1)}}class x{constructor(e,n,t,o){this.todoName=e,this.priority=o,this.dateTime=n,this.note=t}}const v=document.querySelector(".content");function b(e){const n=document.createElement("div");n.classList.add("project-controls");const t=document.createElement("button");t.classList.add("edit-project"),t.setAttribute("data-project-index",`${e}`);const o=document.createElement("button");o.classList.add("delete-project"),o.setAttribute("data-project-index",`${e}`),n.append(t,o);const r=document.createElement("div");r.classList.add("project-info");const A=document.createElement("header");A.textContent=`${h.array[e].projectName}`;const a=document.createElement("div");a.textContent=`${h.array[e].description}`,r.append(A,a);const d=document.createElement("div");d.classList.add("list-container"),h.array[e].todoList.forEach(((n,t)=>{const o=document.createElement("div");o.classList.add("todo-card"),o.setAttribute("data-todo-index",`${t}`);const r=document.createElement("div");r.classList.add("top-row");const A=document.createElement("button"),a=document.createElement("span");switch(A.classList.add("list-done"),a.classList.add("list-title"),a.textContent=n.todoName,A.setAttribute("data-todo-index",`${t}`),n.priority){case"1":A.classList.add("low");break;case"2":A.classList.add("medium");break;case"3":A.classList.add("high")}r.append(A,a);const i=document.createElement("div");i.classList.add("bottom-row");const c=document.createElement("span"),l=document.createElement("span");c.classList.add("list-note"),l.classList.add("list-date"),c.textContent=n.note,l.textContent=n.dateTime,i.append(c,l),o.append(r,i),d.appendChild(o),A.addEventListener("click",(()=>{h.removeTodoFromProject(e,t),y(),b(e)}))}));const i=document.createElement("div");i.classList.add("list-add");const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("add-svg"),c.setAttributeNS(null,"viewBox","0 0 24 24"),c.setAttributeNS(null,"fill","#f7b16b");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttributeNS(null,"d","M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"),c.appendChild(l);const s=document.createElement("span");s.textContent="Add task",i.append(c,s),i.setAttribute("data-project-index",`${e}`),v.append(n,r,d,i),v.setAttribute("data-project-index",e),o.addEventListener("click",(()=>{document.querySelector("#confirm-delete").setAttribute("data-project-index",e),document.querySelector("#confirm-delete").showModal()})),i.addEventListener("click",(()=>{document.querySelector(".modal-add-todo").showModal()})),t.addEventListener("click",(()=>{document.querySelector("#modal-edit-project").showModal(),document.querySelector("#edit-project-name").value=h.array[e].projectName,document.querySelector("#edit-project-desc").value=h.array[e].description}))}function y(){for(;v.firstChild;)v.firstChild.remove()}const j=document.querySelector(".project-container");function w(){h.array.forEach(((e,n)=>{const t=document.createElement("button");t.textContent=e.projectName,t.setAttribute("class","project"),t.setAttribute("data-project-index",`${n}`),j.appendChild(t)}))}function k(){for(;j.firstChild;)j.firstChild.remove()}const S=document.querySelector(".project-container");!function(){let e=JSON.parse(localStorage.getItem("info"));e&&e.forEach(((e,n)=>{h.addProjectToContainer(e.projectName,e.description),e.todoList.forEach(((e,t)=>{h.addTodoToProject(n,e.todoName,e.dateTime,e.note,e.priority)}))}))}(),w(),h.array[0]&&b(0),S.addEventListener("click",(e=>{let n=e.target;n.getAttribute("data-project-index")&&(y(),b(n.getAttribute("data-project-index")))})),document.querySelector(".add-project").addEventListener("click",(()=>{document.querySelector(".modal-add-project").showModal()})),document.querySelector("#close-project-modal").addEventListener("click",(()=>{document.querySelector(".modal-add-project").close(),document.querySelector("#project-name").value="",document.querySelector("#project-desc").value=""})),document.querySelector("#close-todo-modal").addEventListener("click",(()=>{document.querySelector(".modal-add-todo").close(),document.querySelector("#todo-name").value="",document.querySelector("#todo-date").value="",document.querySelector("#todo-note").value=""})),document.querySelector(".modal-btn-add-project").addEventListener("click",(()=>{const e=document.querySelector("#project-name"),n=document.querySelector("#project-desc");!function(e,n){h.addProjectToContainer(e,n),k(),w()}(e.value||"Unnamed",n.value||"Description not added."),document.querySelector(".modal-add-project").close(),e.value="",n.value="",y(),b(h.array.length-1)})),document.querySelector("#modal-btn-add-todo").addEventListener("click",(()=>{let e=document.querySelector(".list-add").getAttribute("data-project-index"),n=document.querySelector("#todo-name"),t=document.querySelector("#todo-date"),o=document.querySelector("#todo-note"),r=document.querySelector('input[name="priority"]:checked');""!=n.value?(function(e,n,t,o,r){h.addTodoToProject(e,n,t,o,r),y(),b(e)}(e,n.value,t.value,o.value,r.value),document.querySelector(".modal-add-todo").close(),document.querySelector(".modal-add-todo>form").reset()):alert("Name cannot be empty!")})),document.querySelector("#close-project-edit-modal").addEventListener("click",(()=>{document.querySelector("#modal-edit-project").close()})),document.querySelector(".modal-btn-edit-project").addEventListener("click",(()=>{let e=document.querySelector(".content").getAttribute("data-project-index");h.editProject(e,document.querySelector("#edit-project-name").value,document.querySelector("#edit-project-desc").value),y(),b(e),k(),w(),document.querySelector("#modal-edit-project").close()}));let E=document.querySelector("#confirm-delete");function L(){localStorage.setItem("info",JSON.stringify(h.array))}document.querySelector("#yes").addEventListener("click",(()=>{let e=E.getAttribute("data-project-index");h.removeProject(e),y(),k(),w(),0==e?(console.log("asd"),h.array[0]&&b(0)):h.array[e-1]&&b(e-1),E.close()})),document.querySelector("#no").addEventListener("click",(()=>{E.close()}))})();
//# sourceMappingURL=main.js.map