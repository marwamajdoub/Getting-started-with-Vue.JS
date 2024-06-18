app.component('product-display',{
    template: `
     <div class ="product-display">
            <div class ="product-container">
             <div class="product-image"  >
              <img  v-bind:src="image">
              <div 
             v-for="variant in variants" 
             :key="variant.id" 
             @mouseover="updateImage(variant.image)"
             class="color-circle"
             :style="{backgroundColor:variant.color}"
             >{{variant.color}}</div>

             </div> 
            
             <div class="product-info">
                <h1>{{product}}</h1>
                <div class="cart"> cart ({{cart}})</div>
                <p v-if="inventory >10">inStock</p>
                <p v-else="inventory<10">Out of stock</p>
                <ul>
                    <li v-for="details in details">{{ details}}</li>

                </ul>
               
                <button class="name" v-on:click="addTocart"> add cart</button>
             </div>

            </div>
      </div>      
    
      `,
    data(){
        return{
            cart:0,
            product:'T-shirt',
            image:'./t_shirt.jpg',
            inventory:100,
            details:['50% cotton','30%wool','20%polyester'],
            variants:[{
                id:2234,color:'blue',image:'t_shirt.jpg'},
                {id:2235,color:'black',image:'black.jpg'
            },]
         
            
    
            
    
           
        }
    
    },
    methods:{
        addTocart(){
            this.cart+=1;
    
        },
        updateImage(variantImage){
            this.image=variantImage;
    
        }
    
    
    }
    })
