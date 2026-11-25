import { useEffect, useState } from 'react'
import Cardforbooks from './Cardforbooks'
import { useNavigate } from 'react-router-dom'
import { axiosInstent } from '../config/Inspector'

const Books = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [yo, setYo] = useState(false)
  const [error, setError] = useState('')
    const navigate =useNavigate()


  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      try {
        const response = await axiosInstent.get('/products')
        setProducts(response.data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Something went wrong. Please try again.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadProducts()
    return () => controller.abort()
  }, [])

  const visibleProducts = products.filter((product) => {
    const matchesSearch = `${product.title} ${product.description}`
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesSearch
  })

  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-12 text-white sm:px-8 sm:pt-16">
      <section className="border-b border-white/10 pb-8 sm:pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          The FocusBoard shop
        </p>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Find your next favorite.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              A little something for your next focused moment.
            </p>
          </div>
          <p className="text-sm text-white/45">
            {loading ? 'Gathering the collection…' : `${visibleProducts.length} items to explore`}
          </p>
        </div>
      </section>

      <section className="py-6" aria-label="Search products">
        <label className="flex w-full items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 focus-within:border-emerald-300/60 lg:max-w-xs">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the collection"
              className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/35"
            />
        </label>
      </section>

      {loading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="Loading products">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="animate-pulse overflow-hidden rounded-xl border border-white/10">
              <div className="h-64 bg-white/[0.06]" />
              <div className="space-y-3 p-4">
                <div className="h-3 w-1/3 rounded bg-white/10" />
                <div className="h-4 rounded bg-white/10" />
                <div className="h-4 w-1/2 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div role="alert" className="rounded-xl border border-rose-300/20 bg-rose-300/5 px-6 py-10 text-center">
          <p className="text-white">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10"
          >
            Try again
          </button>
        </div>
      ) : visibleProducts.length ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="relative flex h-64 items-center justify-center bg-[#f5f4ef] p-7">
                <img
                onClick={()=>{
                  navigate(`/home/detail/${product.id}`)
                }}
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.04] cursor-pointer"
                />
              </div>
              <div className="flex min-h-40 flex-col p-4">
                <div className="text-xs text-white/50" aria-label={`${product.rating?.rate ?? 0} out of 5 stars`}>
                  <span className="text-amber-300">★</span> {product.rating?.rate ?? '—'}
                  <span className="text-white/35"> ({product.rating?.count ?? 0})</span>
                </div>
                <h2 className="mt-3 line-clamp-2 min-h-12 text-sm font-medium leading-6 text-white/90">
                  {product.title}
                </h2>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-lg font-semibold text-emerald-200">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-white/40">View item</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-white/55">No items match that search. Try another title.</p>
      )}
      {yo ?<Cardforbooks product={products}/>:null}
    </main>
  )
}

export default Books