import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={styles.pageNumbers}>
            {pages.map(p => <span className={currentPage === p && styles.selectedPage}
                                  onClick={(e) => {
                                      onPageChanged(p)
                                  }}>{p}</span>)}
        </div>
    </div>
}

export default Paginator;