import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p>אופס... הדף אינו קיים.</p>
            <p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1" allow="autoplay" title="Page not Found"></iframe>
            </p>
        </div>
    );
}

export default PageNotFound;
