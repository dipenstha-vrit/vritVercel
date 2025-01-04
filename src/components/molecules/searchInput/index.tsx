"use client";
import { SearchIcon } from "@/app/images";
import { Input } from "@/components/ui/input";
import React from "react";

interface SearchComponentProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  className?: string;
}

const SearchInput: React.FC<SearchComponentProps> = ({
  className,
  ...props
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`w-full md:max-w-md mx-auto ${className}`}
    >
      <div className="relative">
        <Input
          type="search"
          className="block w-full h-10 ps-4 pe-12 text-sm border-none rounded-3xl bg-[#F3F4F6]  outline-none"
          placeholder="Search FAQ's here"
          required
          {...props}
        />
        <div className="absolute inset-y-0 right-4 flex items-center pl-4 pointer-events-none">
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
