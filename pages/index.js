import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import Filters from '../components/SidebarFilters';
import SortBar from '../components/SortBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return { props: { products } };
}

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('recommended');
  const [activeFilters, setActiveFilters] = useState({});

  const productsPerPage = 6;

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
    setCurrentPage(1);
  };

  let filteredProducts = [...products];

  if (activeFilters?.category?.length) {
    filteredProducts = filteredProducts.filter((p) =>
      activeFilters.category.includes(capitalize(p.category))
    );
  }

  if (activeFilters?.gender?.length) {
   
  }



  if (sortOption === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, start + productsPerPage);

  return (
    <>
      <Head>
        <title>Product Listing Page - Appscrip</title>
        <meta name="description" content="Browse our stylish collection of products." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Product Listing Page - Appscrip",
              description: "Browse our stylish collection of products.",
              url: "https://your-netlify-site.netlify.app"
            }),
          }}
        />
      </Head>

      <Header />
      <PageHeading />

      <main className={styles.main}>
        <div className={styles.layout}>
          {/* Sidebar Filters */}
          <Filters onApplyFilters={handleApplyFilters} />

          {/* Right Content */}
          <div className={styles.gridWrapper}>
            <SortBar sortOption={sortOption} setSortOption={setSortOption} />

            <div className={styles.grid}>
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products match your filters.</p>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
