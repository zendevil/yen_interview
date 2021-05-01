import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const bookmarks =
      [{icon: "./star.png", name: "Bookmarks", is_folder: false, link:"bm.abc"},
       {icon: "./calendar.png", name: "Calendar", is_folder: false, link:"bm1.abc"},
       {icon: "./gmail_logo.png", name: "Mail 1", is_folder: false, link:"bm2.abc"},
       {icon: "./ms_logo.png", name: "Mail 2", is_folder: false, link:"bm3.abc"},
       {icon: "./amazon.png", name: "Amazon", is_folder: false, link:"bm4.abc"},
       {icon: "./yen.png", name: "YEN", is_folder: false, link:"bm5.abc"},


       {icon: "./is_folder.png", name: "Yen", is_folder: true,
        nested_items:
        [{icon: "./is_folder.png", name: "Yen1", is_folder: true, nested_items: [{icon: "./is_folder.png", name: "Yen1.1", is_folder: true, nested_items: []
                                                                                            }]
         }]},



       {icon: "./is_folder.png", name: "Agata", is_folder: true, nested_items: []},
       {icon: "./is_folder.png", name: "Mentoring", is_folder: true,
        nested_items: [{icon: "./is_folder.png", name: "Mentoring1", is_folder: true, nested_items: []}]},
      ];
const BookmarkEntry = (props) => {
    var {icon_src, name, is_folder, nested_items, link} = props;
    const [displayChildren, setDisplayChildren] = useState(false);
    return (<a href={is_folder ? null : link}>
            <div
                style={{marginLeft: "10px"}}
            >
            <div
            onClick={() => {console.log("click");
                            setDisplayChildren(!displayChildren)}}
            >
                <img src={icon_src}/>
                <text>{name}</text>
            </div>
            {is_folder && displayChildren && nested_items ?
             nested_items.map((item) => <BookmarkEntry
                               icon={item.icon}
                               name={item.name}
                               is_folder={item.is_folder}
                              nested_items={item.nested_items}/>)
             : null}
            </div>
            </a>
           );
}

const BookmarkComp = () => {
    return (<div>
            <h1> Bookmarks </h1>
            {bookmarks.map(
                (item) =>
                        <BookmarkEntry
                          icon={item.icon}
                          name={item.name}
                          is_folder={item.is_folder}
                          nested_items={item.nested_items}
                          link={item.link}
                          />)}
            </div>)
}



ReactDOM.render(
    <React.StrictMode>
        <BookmarkComp/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
