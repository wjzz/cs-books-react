import React from "react";
import { BookData } from "./Books";
import { Link, Route } from "react-router-dom";

interface Props {
  info: BookData;
  toggleRead(index: number): void;
}

const BookItem: React.FC<Props> = (props: Props) => {
  const {info, toggleRead} = props;
  const {title, src} = info.book;
  const readMark = info.read ? "✅" : "❌";
  const readOrUnread = info.read ? "unread" : "read";
  const imgSrc = "/covers/" + src;

  const getLinkByFocus = (focused: any) => {
    if (!focused)
      return <Link to={`/focus/${info.index}`}>{title} </Link>
    else
      return <b><Link to={`/`}>{title} </Link></b>
  };

  return (
    <tr>
      <td className="cover">
        <img src={imgSrc} alt="book cover" height="80"></img>
      </td>
      <td>
        {readMark} 

        <Route path={`/focus/${info.index}`} children={({match}) => getLinkByFocus(match)}/>
      </td>
      <td>
        <button onClick={() => toggleRead(info.index)}> Mark as {readOrUnread} </button>
      </td>
    </tr>
  );
}

export default BookItem;