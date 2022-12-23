
export default function Pagination({
  cardsPerPage,
  allPictures,
  pagination,
  currentPage,
}: {
  cardsPerPage: number;
  currentPage: number;
  allPictures: number;
  pagination: any;
}) {
    
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allPictures / cardsPerPage); i++) {
    pageNumber.push(i + 1);
  }

  const next = () => {
    if (currentPage + 1 <= pageNumber.length) pagination(currentPage + 1);
  };
  const previous = () => {
    if (currentPage - 1 >= 1) pagination(currentPage - 1);
  };

  return (
    <div>
      <div>
        {pageNumber.length ? (
          <div>
            <span>
              Page: {currentPage} of {pageNumber.length}
            </span>
          </div>
        ) : (
          <div>
            <p>There are no concidenses</p>
          </div>
        )}
      </div>

      <div>
        {pageNumber?.length !== 0 && pageNumber?.length !== 1 ? (
          <div>
            <div>
              <button onClick={() => previous()}>Prev</button>
              <button onClick={() => next()}>Next</button>
            </div>
          </div>
        ) : null}
      </div>

      <div>
        {pageNumber?.length !== 0 && pageNumber?.length !== 1 ? (
          <div>
            {pageNumber &&
              pageNumber?.map((el) => (
                <button key={el} onClick={() => pagination(el)}>
                  {el}
                </button>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
} 