import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { handlePage } from "@/Feature/job/jobSlice";

function Pagination({
  numOfPages,
  page,
  setPage,
}: {
  numOfPages: number | 1;
  page: number | 1;
  setPage: (update: (prev: number) => number) => void;
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-x-4 mt-4">
      <Button
        onClick={() => {
          setPage((prev: number) => prev + 1);
          dispatch(handlePage(Number(page)));
        }}
        disabled={page >= numOfPages}>
        بعدی
      </Button>
      <span>{page}</span>
      <Button
        onClick={() => {
          setPage((prev: number) => prev - 1);
          dispatch(handlePage(Number(page)));
        }}
        disabled={page == 1}>
        قبلی
      </Button>
    </div>
  );
}

export default Pagination;
