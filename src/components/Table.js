import "./Table.css"

const Table = () => {
    return (
        <div id="tableCont">
            <div className="columns" id="column1">
                <h3 className="columnTitle">Front-End</h3>
                <br />
                <p className="descPara">As a front-end developer, I have worked on various web development projects, creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. I have experience with front-end frameworks such as React, as well as CSS preprocessors like Sass and Less. I am also familiar with version control systems such as Git and project management tools like Jira. Throughout my experience, I have collaborated closely with designers, back-end developers, and other team members to deliver high-quality and engaging user experiences.</p>
            </div>
            <div className="columns" id="column2">
                <h3 className="columnTitle">Back-End</h3>
                <br />
                <p className="descPara">As a back-end developer, I have gained a wealth of experience in designing and implementing server-side web applications. I have a strong understanding of programming languages such as JavaScript and have experience using frameworks such as Node.js and Express. I have expertise in developing RESTful APIs, database design, and optimization, as well as working with various database systems including MySQL, PostgreSQL, and MongoDB. Also, have great experience working with GraphQL. In general, I'm a great learner and never stop growing in tech!</p>
            </div>
        </div>
        
    )
}

export default Table;