import React, { useState } from 'react';
import MyInput from '../addinput/MyInput';
import MyButton from '../addbutton/MyButton';
import { FaRegCreditCard } from 'react-icons/fa6';
import cl from './PostForm.module.css';
import { useTranslation } from 'react-i18next';

const PostForm = ({create}) => {
    const { t } = useTranslation();
    const [post, setPost] = useState([]);

  
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
          ...post, id: Date.now()
        }
        create(newPost)
        setPost({
          numberCard: '',
          dataCard: '' 
        })
    }

    return (
        <form>
          <div className={cl.cardSectionInput}>
          <MyInput 
            value={post.numberCard}
            onChange={e => setPost({...post, numberCard: e.target.value})}
            placeholder='Card number *'
          />
          <FaRegCreditCard className={cl.icon}/>
          </div>
          <MyInput
            placeholder='Full name'
          />
          <MyInput
            value={post.dataCard}
            onChange={e => setPost({...post, dataCard: e.target.value})}
            placeholder='Data card'
          />
            <MyButton onClick={addNewPost}>{t("addcard.titlepost")}</MyButton>
      </form>
    );
};

export default PostForm;