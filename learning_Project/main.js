const app=Vue.createApp({
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