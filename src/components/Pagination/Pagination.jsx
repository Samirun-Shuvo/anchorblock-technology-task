const Pagination = ({ paginationData, setPaginationData, fetchData }) => {
  const handleNextPage = () => {
    if (
      paginationData.activePage !=
      Math.ceil(paginationData.total / paginationData.perPage)
    ) {
      setPaginationData({
        ...paginationData,
        activePage: paginationData.activePage + 1,
      });
      fetchData(paginationData.activePage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (paginationData.activePage > 1) {
      setPaginationData({
        ...paginationData,
        activePage: paginationData.activePage - 1,
      });
      fetchData(paginationData.activePage - 1);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 ">
      <div>
        <button
          onClick={handlePreviousPage}
          className="bg-[#FFF] border border-[#D0D5DD] rounded-lg px-[14px] py-2 text-[#344054] font-medium text-sm"
        >
          previous
        </button>
      </div>
      <div>
        <p className="text-[#344054] font-medium text-sm">
          page {paginationData.activePage} of{" "}
          {Math.ceil(paginationData.total / paginationData.perPage)}
        </p>
      </div>
      <div>
        <button
          onClick={handleNextPage}
          className="bg-[#FFF] border border-[#D0D5DD] rounded-lg px-[14px] py-2 text-[#344054] font-medium text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
