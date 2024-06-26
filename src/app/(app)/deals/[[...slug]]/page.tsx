import { getDealsPage } from '@/app/actions'
import Logo from '@/components/logo'
import StoreFilter from '@/components/store-filter'
import ProductCard2 from '@/components/product-card-2'

export default async function DealsPage({
  params,
}: {
  params: { slug: [string, string] }
}) {
  const deals = await getDealsPage(params.slug)

  return (
    <div className='container relative'>
      {params.slug ? (
        <div className='mx-auto flex max-w-[980px] scale-[250%] flex-col items-center py-6 pt-10'>
          <Logo shop={deals.products[0].store} />
        </div>
      ) : (
        <StoreFilter deals={deals} />
      )}
      <p className='mb-2 pb-1 text-[28px] font-[650] tracking-tight'>
        Daily Deals
      </p>
      <div className='grid grid-cols-4 gap-4'>
        {deals.products.map((product) => (
          <ProductCard2 product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
