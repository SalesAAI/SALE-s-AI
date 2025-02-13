import React from 'react';
import { RoleGrid } from './RoleGrid';

export function ConversationsPage() {
  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <div className="max-w-[1440px] mx-auto animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
            Select Role
          </h1>
        </div>
        <RoleGrid />
      </div>
    </main>
  );
}