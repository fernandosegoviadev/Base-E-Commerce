import style from './styles/ListCategories.module.css';
import { getAllCategories } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import CreateCategory from './CreateCategory/CreateCategory';
import EditCategory from './EditCategory/EditCategory';
import { deleteCategory } from '../../helpers/category';


function ListCategories() {
    const categories = useSelector((state) => state.listCategories);
    const [data, setData] = useState(null);
    // console.log(categories, 'las categorias del estado globa');

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('dispara el useEffect y trae las categorias');
        if (!categories.length) {
            dispatch(getAllCategories());
        }
    }, []);

    const closeList = (e) => {
        e.preventDefault();
        document.getElementById("myListCategories").style.display = "none";
    }

    const getCategories = (e) => {
        // console.log('traigo las categorias');
        dispatch(getAllCategories());
    }

    const openFormAddCategory = () => {
        // console.log('abrir add category');
        document.getElementById("myFormAddCategory").style.display = "block";
    }


    const openFormEditCategory = (data) => {
        // console.log('abrir edit category', data);
        setData(data);
        // document.getElementById("myFormEditCategory").style.display = "block";
    }

    const deleteOneCategory = async (idCategory) => {
        // console.log('llega el id a la fn', idCategory);
        let infoCategory = {
            idCategory: idCategory
        }
        if (window.confirm('Are you sure to delete this Category?')){
            let deleteOne = await deleteCategory(infoCategory);
            console.log(deleteOne, 'respuesta del back');
            if(deleteOne.delete === true) {
                window.confirm('Categoria elminada');
                getCategories();
            } else {
                window.confirm('Error la categori no fue eliminada');
            }
        }
    }


    return (
        <div className={style.listPopup} id="myListCategories" >
            <div className={style.listContainer}>
                <h3>List catetories</h3>

                <li style={{ listStyle: 'none' }}>
                    {categories ? categories.map(c => {
                        return (
                            <ul key={c._id}><strong>{c.name}</strong>  {c.description}
                                <button onClick={() => openFormEditCategory(c)}
                                >⟳</button>
                                <button onClick={() => deleteOneCategory(c._id)}
                                >✗</button>
                            </ul>
                        )
                    }) : <h3>Category not found</h3>}
                </li>

                <button onClick={(e) => getCategories(e)}
                    className='btn btn-primary w-100' >Refresh</button>
                <p></p>
                <button onClick={openFormAddCategory}
                    className='btn btn-primary w-100' >Create</button>
                <p></p>
                <button type='submit' className='btn btn-primary w-100'
                    onClick={(e) => closeList(e)}>Close</button>

                <CreateCategory />

                {data && <EditCategory
                    name={data.name}
                    description={data.description}
                    _id={data._id}
                    setData={setData}
                    getCategories={getCategories}
                />
                }

            </div>
        </div>
    );
}

export default ListCategories;