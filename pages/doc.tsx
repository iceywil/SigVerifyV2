import React from 'react';
import styles from './doc.module.css';
import NavBar from '../app/navbar/navbar';

const ImagePage = () => {
    let document = {name:"oui"};
    document.name = "Ambassador Program XRPL";
    return (
        <div className={styles.container}>
            <NavBar />
            <h2 className={styles.title}>Document : {document.name}</h2>
            <img src="/ambaxrpl.png" alt="Centered Image" className={styles.image} />
            {/*             </div>
 */}         <div className={styles.popup}>
                Sign Here: <input type="text" />
            </div>
            <button>
                Submit
            </button>
        </div>
    );
};

export default ImagePage;
