"use client";
import SearchInput from "@/components/molecules/searchInput";
import Text from "@/components/ui/text";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}

const FaqHero = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebounce((term: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    // Update the URL with the new search term
    router.replace(`?${params.toString()}`);
  }, 500);

  return (
    <div className="pattern4 w-full h-[400px] flex justify-center items-center px-5">
      <div className="flex flex-col justify-center items-center gap-6">
        <Text className="text-3xl text-white font-bold px-4">
          Frequently asked questions
        </Text>
        <SearchInput onChange={(e) => handleSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default FaqHero;
