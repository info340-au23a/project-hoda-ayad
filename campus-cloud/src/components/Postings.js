'use strict'

import React from "react";

export default function PostingsList(props) {

    const postingCards = props.postings.map((posting) => <PostingCard data={posting}/>)

    return (
        <div className="postings">
            {postingCards}
        </div>
    )
}

function PostingCard({ data }) {
    return (
        <div className="posting-card">
            {data.title}
        </div>
    )
}