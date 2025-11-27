import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cthzmnhuunivbhvuxken.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aHptbmh1dW5pdmJodnV4a2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzY3NjEsImV4cCI6MjA3OTgxMjc2MX0.CNFaxWYXexrc9q1eDogvhGeDfQf87G95Qx_rWWZXskc"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);