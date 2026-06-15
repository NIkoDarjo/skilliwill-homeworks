import Card from "./components/card";
import zaratustraImage from "./assets/z.png"
import React from 'react'

const data = [
    {id: 1 , image:zaratustraImage, name:"ესე იტყოდა ზარატუსტრა", description:"არის ფილოსოფიური ნაწარმოები, სადაც მთავარი გმირი ზარატუსტრა ადამიანებს უზიარებს თავის იდეებს ადამიანის განვითარებაზე, თავისუფლებაზე და „ზეკაცის“ იდეაზე. ნაწარმოებში განხილულია ძველი ღირებულებების უარყოფა და ახალი ცხოვრებისეული აზრის ძიება." ,characters:"პერსონაჟები: ზარატუსტრა , არწივი , გველი , ბერი/მოხუცი , ზეკაცი , უკანასკნელი ადამიანი  "},
    
]

export default function App() {

  function action(name,characters){
    console.log(`${name} -ს ${characters}`)
  }
  return (
    <div className="app-container">
      {data.map((w) => (
        <Card 
          key={w.id}
          image={w.image} 
          name={w.name} 
          description={w.description} 
          characters={w.characters}
          action={action}
        />))}
    </div>
  )
}
