const { idText, createYield } = require("typescript")

describe('website should display in the different resulution', ()=>{


    it('windows resultion with 1280*720', ()=>{
       cy.viewport(1280,720)
       cy.visit('http://demowebshop.tricentis.com/')

    })
    it('windows resultion with 1980*1880', ()=>{
        cy.viewport(1280,720)
        cy.visit('http://demowebshop.tricentis.com/')
 
     })

     it('iphone X', ()=>{
        cy.viewport('iphone-x')
        cy.visit('http://demowebshop.tricentis.com/')
 
     })
 
     it('ipad Min', ()=>{
        cy.viewport('ipad-mini')
        cy.visit('http://demowebshop.tricentis.com/')
 
     })

    
     
     it('iphone-6  - land Scape', ()=>{
        cy.viewport('iphone-6', 'landscape')
        cy.visit('http://demowebshop.tricentis.com/')
 
     })

     it('iphone-6  - land Scape', ()=>{
      cy.viewport('iphone-8', 'landscape')
      cy.visit('http://demowebshop.tricentis.com/')

   })

   it('iphone-8  - land Scape', ()=>{
      cy.viewport('iphone-8', 'landscape')
      cy.visit('http://demowebshop.tricentis.com/')

   })
    
   it('iphone-6 plus  - land Scape', ()=>{
      cy.viewport('iphone-6plus', 'landscape')
      cy.visit('http://demowebshop.tricentis.com/')

   })

   it('iphone- 7 plus  - land Scape', ()=>{
      cy.viewport('iphone-8plus', 'landscape')
      cy.visit('http://demowebshop.tricentis.com/')

   })

})