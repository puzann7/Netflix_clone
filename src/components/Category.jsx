import React, { useState } from 'react'
import { fetchCategory } from '../data/fetchReq'
function Category({categoryId, image}) {
    const [category, setCategory] = useState();
    useEffect(() => {
        const getCategory = async()=>{
            try {
                const res = await fetchCategory(categoryId);
                setCategory(res);
            } catch (error) {
                console.log(error);
            }

        }
        getCategory();
    }, [categoryId])

  return (
    <div>

    </div>
  )
}

export default Category
