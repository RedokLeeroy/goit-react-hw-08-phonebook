import s from './Button.module.css';
import i from './Item.module.css';

export const Item = ({ name, number, onDelete, id }) => {
  return (
    <li className={i.item}>
      <p className={i.P}>
        {name} : {number}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        delete
      </button>
    </li>
  );
};
