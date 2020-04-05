class BookStore{
    constructor ( name = 'bookName',author='authorName', category = 'uncategorized',price=0.00 )
    { 
      this.name = name;
      this.author=author;
      this.category = category;
      this.price = price; 
    }
        

     bookDisplay ( element = null ) 
      {
    
        if ( element !== null )
        {
      
         element.innerHTML += `
          <dl>
          <dt>Name:</dt>
          <dd>${this.name}</dd>
          <dt>Author Name:</dt>
          <dd>${this.author}</dd>
            <dt>Category:</dt>
          <dd>${this.category}</dd>
          <dt>Price:</dt>
          <dd>${this.price}</dd>
         </dl>
      `;
    }

}
}

var bookDetails =[
                    new BookStore("MyReceipe","Rathi","Fiction",30),
                    new BookStore("Pete the Cat","James","Story",5),
                    new BookStore("The Pout Fish goes to school","Dan Hanna","Fiction",10),
                    new BookStore("Phonics","Rachel","story",10),
                    new BookStore("Just PickUs Please","Merker Mayer","Fiction",30),
                    new BookStore("Bible","Steve SmallMan"," Non Fiction",30),
                    new BookStore("Curious You on your way","Kathleen W Zoeh"," Fiction",10),
                    new BookStore("Bear Listens","Robert Cutting"," Info Fiction",10),
                    new BookStore("Who Would Win","Steve Jerry Pallotta"," Non Fiction",15),
                    new BookStore("Volcanoes","Anne Schriber"," Non Fiction",10),
                    new BookStore("Amazing Animal Journey","Laura Marsh"," Non Fiction",10),
                    new BookStore("Intentional living  ","John Maxwell"," Non Fiction",50),
                    new BookStore("Inner Engineering ","Sadguru"," Non Fiction",100)];


                    

                    var myElement = document.body;

                 //bookDetails.bookDisplay(myElement);
                for ( let books of bookDetails ) 
                { 
                     books.bookDisplay( myElement ); 
                }