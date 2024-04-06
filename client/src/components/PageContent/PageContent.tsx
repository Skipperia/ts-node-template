import React from "react";
import CoolPageTitle from "../CoolPageTitle/CoolPageTitle";
import '../styles/pagecontent.css';

interface PageContentProps {
    pageTitle: string
}
const PageContent = (props: PageContentProps) => {
    const content = "dsadsa";

    return (
        <div>
            <CoolPageTitle title={props.pageTitle} />
            <div className="card">
                <div className="card-content">{content}</div>
            </div>
        </div>
    )
}

export default PageContent