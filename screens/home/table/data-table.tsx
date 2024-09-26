"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { cn } from "@/lib/cn";

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Link as NextViewTransition } from "next-view-transitions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function PostsTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="relative w-full overflow-auto">
        <table className="w-full">
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  <NextViewTransition href={row.getValue("slug")}>
                    {row.getVisibleCells().map((cell) => {
                      if (cell.column.id === "slug") {
                        return null;
                      }
                      return (
                        <td className={cn("w-full border-border border-t py-2 align-middle", {})} key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </NextViewTransition>
                </tr>
              ))
            ) : (
              <div>
                <div className="h-24 text-center">No results.</div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
