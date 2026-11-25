import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstent } from '../config/Inspector'

const Cardforbooks = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const getProduct = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await axiosInstent.get(`/products/${id}`)
        setProduct(response.data)
      } catch (fetchError) {
        if (!controller.signal.aborted) {
          setError('Could not load this product. Please try again.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    getProduct()
    return () => controller.abort()
  }, [id])

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 text-white sm:px-8 sm:py-16">
      <button
        type="button"
        onClick={() => navigate('/home/bookstore')}
        className="mb-8 text-sm text-white/60 transition hover:text-white"
      >
        ← Back to products
      </button>

      {loading ? (
        <p className="py-16 text-center text-white/60">Loading product...</p>
      ) : error ? (
        <p role="alert" className="py-16 text-center text-rose-200">{error}</p>
      ) : product ? (
        <article className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-12">
          <div className="flex min-h-80 items-center justify-center rounded-xl bg-[#f5f4ef] p-8">
            <img src={product.image} alt={product.title} className="max-h-96 w-full object-contain" />
          </div>
          <div>
            <p className="text-sm text-amber-300">
              ★ {product.rating?.rate ?? '—'}
              <span className="ml-1 text-white/45">({product.rating?.count ?? 0} reviews)</span>
            </p>
            <h1 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">{product.title}</h1>
            <p className="mt-5 text-sm leading-7 text-white/65">{product.description}</p>
            <p className="mt-6 text-2xl font-semibold text-emerald-200">${Number(product.price).toFixed(2)}</p>
          </div>
        </article>
      ) : null}
    </main>
  )
}

export default Cardforbooks