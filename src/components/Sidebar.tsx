import React, { useEffect, useState } from 'react'

import { useSearchParams } from "react-router-dom"
import { any } from 'prop-types'
import { Box } from '@chakra-ui/layout'

const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.getAll("categoies")
  const initialColor = searchParams.getAll("color")
  const initialOrder = searchParams.get("order")
  const initialGender = searchParams.getAll("gender")
  const [categories, setCategories] = useState(initialCategory || [])
  const [color, setColor] = useState(initialColor || [])
 const [gender, setGender] = useState(initialGender || [])
  const [order, setOrder] = useState(initialOrder || "")


  useEffect(() => {
  const params: { color: string[]; categories: string[]; order?: string ,gender : string[] } = {
  color,
    categories,
    gender,
  
};

    order && (params.order  = order)
    setSearchParams(params)

  }, [categories, color, order,gender])


  const handleCategory = (e:React.ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target;

    let newCategory = [...categories]

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((element) => element !== value)
    }
    else {
      newCategory.push(value)
    }

    setCategories(newCategory)

  }

   const handleGender = (e :React.ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target;

    let newGender = [...gender]

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value)
    }
    else {
      newGender.push(value)
    }

    setGender(newGender)

  }


  const handleColor = (e :React.ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target;

    let newColor = [...color]

    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value)
    }
    else {
      newColor.push(value)
    }

    setColor(newColor)

  }


  // Sorting

  const handleSortOrder = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOrder(value)
  }


  return (
    <Box   textAlign="left"
     marginLeft="55px"
      width="200px"
      display={{ base: 'block', md: 'flex' }}
      flexDirection={{ base: 'column', md: 'column' }}
      alignItems={{ base: 'baseline', md: 'baseline' }}
      borderRight="1px solid gray"
      minHeight="fit-content"
      fontWeight={{ base: '600', md: '499' }}
    fontSize={{ base: '20px', md: '15px' }}>
      <h3 style={{fontWeight:600}}>SORT BY PRICE</h3>
      <div>
        <div>
          <input type='radio' name='order' value={"asc"} defaultChecked={order === "asc"}   onChange={handleSortOrder}/>
          <label>Ascending</label>
        </div>
        <div>
          <input type='radio' name='order' value={"desc"} defaultChecked={order === "desc"}   onChange={handleSortOrder}/>
          <label>Descending</label>
        </div>
      </div>
      <br/>
      <h3 style={{fontWeight:600}}>CATEGORIES</h3>
      <div>
        <input type='checkbox' value={"shirt"}
          onChange={handleCategory}
          checked={categories.includes("shirt")}
        />
        <label>Shirt</label>
      </div>
      <div>
        <input type='checkbox' value={"kurta"}
          onChange={handleCategory}
          checked={categories.includes("kurta")} />
        <label>Kurta</label>
      </div>
      <div>
        <input type='checkbox' value={"tshirt"}
          onChange={handleCategory}
          checked={categories.includes("tshirt")} />
        <label>T-shirt</label>
      </div>
      <div>
        <input type='checkbox' value={"shorts"}
          onChange={handleCategory}
          checked={categories.includes("shorts")} />
        <label>Shorts</label>
      </div>
      <div>
        <input type='checkbox' value={"dresses"}
          onChange={handleCategory}
          checked={categories.includes("dresses")} />
        <label>Dresses</label>
      </div>
      <div>
        <input type='checkbox' value={"jeans"}
          onChange={handleCategory}
          checked={categories.includes("jeans")} />
        <label>Jeans</label>
      </div>
      <div>
        <input type='checkbox' value={"sweatshirts"}
          onChange={handleCategory}
          checked={categories.includes("sweatshirts")} />
        <label>Sweatshirts</label>
      </div>
      <div>
        <input type='checkbox' value={"sweaters"}
          onChange={handleCategory}
          checked={categories.includes("sweaters")} />
        <label>Sweaters</label>
      </div>
      <div>
        <input type='checkbox' value={"beautycare"}
          onChange={handleCategory}
          checked={categories.includes("beautycare")} />
        <label>Beauty care</label>
      </div>
      <div>
        <input type='checkbox' value={"shoes"}
          onChange={handleCategory}
          checked={categories.includes("shoes")} />
        <label>Shoes</label>
      </div>
      <div>
        <input type='checkbox' value={"jackets"}
          onChange={handleCategory}
          checked={categories.includes("jackets")} />
        <label>Jackets</label>
      </div>
      <div>
        <input type='checkbox' value={"bags"}
          onChange={handleCategory}
          checked={categories.includes("bags")} />
        <label>Bags</label>
      </div>
      <div>
        <input type='checkbox' value={"boots"}
          onChange={handleCategory}
          checked={categories.includes("boots")} />
        <label>Boots</label>
      </div>
      <br />
        <h3 style={{fontWeight:600}}>GENDER</h3>
      <div>
        <input type='checkbox' value={"men"}
          onChange={handleGender}
          checked={gender.includes("men")} />
        <label>Men</label>
      </div>
      <div>
        <input type='checkbox' value={"women"}
          onChange={handleGender}
          checked={gender.includes("women")} />
        <label>Women</label>
      </div>
      <br />
      <h3 style={{fontWeight:600}}>COLOR</h3>
      <div>
         <div>
        <input type='checkbox' value={"blue"}
          onChange={handleColor}
          checked={color.includes("blue")} />
        <label> 🔵 Blue</label>
      </div>
       <div>
        <input type='checkbox' value={"yellow"}
          onChange={handleColor}
          checked={color.includes("yellow")} />
        <label> 🟡 Yellow</label>
      </div>
       <div>
        <input type='checkbox' value={"green"}
          onChange={handleColor}
          checked={color.includes("green")} />
        <label> 🟢 Green</label>
      </div>
        <input type='checkbox' value={"black"}
          onChange={handleColor}
          checked={color.includes("black")} />
        <label> ⚫ Black</label>
      </div>
      <div>
        <input type='checkbox' value={"white"}
          onChange={handleColor}
          checked={color.includes("white")} />
        <label> ⚪ White</label>
      </div>
      <div>
        <input type='checkbox' value={"brown"}
          onChange={handleColor}
          checked={color.includes("brown")} />
        <label> 🟤 Brown</label>
      </div>
      <br />
      <br />
      <br />
    </Box>
  )
}

export default Sidebar

