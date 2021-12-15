import React from "react";
import { HiCheckCircle, HiMinusCircle, HiPlusCircle } from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { addToReadingList, removeReadingList } from './../../redux/actions/bookActions';
import styles from './book.module.css';
const SingleBook = ({ book }) => {
  const { title, author, coverImageUrl, synopsis } = book;
  const dispatch = useDispatch();

  const addToRedingList = (book) => {
    dispatch(addToReadingList(book))
  }

  const removeFromRedingList = (id) => {
    dispatch(removeReadingList(id))
  }

  return (
    <div className='card d-flex mb-3 p-3'
      style={{ position: 'relative' }}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        <HiMinusCircle onClick={() => removeFromRedingList(book?.id)} title="Remove from list" className={styles.minus_icon} />
        <HiPlusCircle onClick={() => addToRedingList(book)} title="Add to Reading" className={styles.plus_icon} />
        <HiCheckCircle title="Mark as Finish" className={styles.check_icon} />
      </div>
    </div>
  );
};

export default SingleBook;
