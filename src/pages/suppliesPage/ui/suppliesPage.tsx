import React, { useState } from 'react';

import { FilterPanel } from '@/features/filterSupplies';
import { Header } from '@/widgets/header';
import { ActionBar } from './actionBar/actionBar';
import { SuppliesTable } from './table/table';

import { PaginationBar } from '@/shared/ui/pagination/pagination';
import styles from './page.module.scss';
import { Typography } from '@mui/material';

export const SuppliesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  return (
    <>
      {/* <Onboarding /> */}
      <Header />
      <main className={styles.main}>
        <Typography variant='subtitle2' className={styles.title}>
          Заявки на поставку
        </Typography>
        <section className={styles.section}>
          <ActionBar />
          <FilterPanel />
          <SuppliesTable />
          <PaginationBar
            page={page}
            totalPages={10}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
            onRowsPerPageChange={(rows) => {
              setRowsPerPage(rows);
              setPage(1);
            }}
          />
        </section>
      </main>
    </>
  );
};
