'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import NextLink from 'next/link'
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
  useParams as useNextParams,
} from 'next/navigation'

const OutletContent = createContext(null)
const OutletData = createContext(undefined)

export function Link({ to, href, ...props }) {
  return <NextLink href={href ?? to} {...props} />
}

export function NavLink({ to, href, className, children, end, ...props }) {
  const pathname = usePathname()
  const target = href ?? to
  const active = end ? pathname === target : (pathname === target || pathname.startsWith(`${target}/`))
  const classes = typeof className === 'function' ? className({ isActive: active }) : className
  return (
    <NextLink href={target} className={classes} {...props}>
      {typeof children === 'function' ? children({ isActive: active }) : children}
    </NextLink>
  )
}

export function useNavigate() {
  const router = useRouter()
  return (href, options = {}) => {
    if (options.replace) router.replace(href)
    else router.push(href)
  }
}

export function useLocation() {
  const pathname = usePathname() || '/'
  const search = useNextSearchParams()
  return useMemo(
    () => ({ pathname, search: `?${search.toString()}`, hash: '', state: null, key: pathname }),
    [pathname, search],
  )
}

export function useParams() {
  const pathname = usePathname() || '/'
  const nextParams = useNextParams() || {}
  const last = pathname.split('/').filter(Boolean).at(-1)
  return useMemo(
    () => ({ ...nextParams, ...(last ? { id: last, slug: last } : {}) }),
    [last, nextParams],
  )
}

export function useSearchParams() {
  const router = useRouter()
  const pathname = usePathname() || '/'
  const current = useNextSearchParams()
  const params = useMemo(() => new URLSearchParams(current.toString()), [current])
  const setParams = (next) => {
    const value = next instanceof URLSearchParams ? next : new URLSearchParams(next)
    const query = value.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }
  return [params, setParams]
}

export function useOutletContext() {
  return useContext(OutletData)
}

export function Outlet({ context }) {
  const content = useContext(OutletContent)
  return <OutletData.Provider value={context}>{content}</OutletData.Provider>
}

export function Navigate({ to, replace = false }) {
  const router = useRouter()
  useEffect(() => {
    if (replace) router.replace(to)
    else router.push(to)
  }, [replace, router, to])
  return null
}
