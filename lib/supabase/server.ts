import { cookies, headers } from "next/headers"
import { createServerClient } from "@supabase/ssr"
import { envInfo } from "@/lib/env"

let _serverSupabase: ReturnType<typeof createServerClient> | any | null = null

export function getSupabaseServer() {
  if (_serverSupabase) return _serverSupabase

  const url = envInfo.supabaseUrl
  const anon = envInfo.supabaseAnonKey
  if (!url || !anon) {
    _serverSupabase = {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        signOut: async () => ({ error: null }),
      },
      from: () => ({
        select: async () => ({ data: null, error: new Error("Supabase not configured") }),
        insert: async () => ({ data: null, error: new Error("Supabase not configured") }),
        update: async () => ({ data: null, error: new Error("Supabase not configured") }),
        delete: async () => ({ data: null, error: new Error("Supabase not configured") }),
        eq: () => ({ data: null, error: new Error("Supabase not configured") }),
        single: async () => ({ data: null, error: new Error("Supabase not configured") }),
        order: () => ({ data: null, error: new Error("Supabase not configured") }),
      }),
      channel: () => ({
        on: () => ({
          subscribe: () => ({ unsubscribe: () => {} }),
        }),
      }),
      removeChannel: () => {},
    } as any
    return _serverSupabase
  }

  const cookieStore = cookies()
  _serverSupabase = createServerClient(url, anon, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch {
          // ignore during server render
        }
      },
      remove(name: string, options: any) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch {
          // ignore
        }
      },
    },
    headers: {
      get(key: string) {
        return headers().get(key) ?? undefined
      },
    },
  })
  return _serverSupabase
}
