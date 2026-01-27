/**
 * UUID 決策邏輯 - 同步在 App 初始化前執行
 * 確保整個 session 內只有一個 FINAL_UUID
 */

export interface UUIDInfo {
  uuid_final: string | null;
  pid_from_query: string | null;
  uuid_from_localStorage: string | null;
}

/**
 * 檢查是否為合法 UUID v4
 */
export function isValidUUID(uuid: string | null | undefined): boolean {
  if (!uuid) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid
  );
}

/**
 * 同步決定 FINAL_UUID
 * 執行順序：
 * 1. 從 URL query 讀 pid/uuid，若合法→回傳並存入 localStorage
 * 2. 讀 localStorage['uuid']，若合法→直接回傳
 * 3. 都不合法→生成新 UUID，存入 localStorage 並回傳
 */
export function resolveFinalUUID(): UUIDInfo {
  // ✅ 從 URL 讀取 query 參數（pid 優先）
  const params = new URLSearchParams(window.location.search);
  const pidFromQuery = params.get('pid') || params.get('uuid') || params.get('surveyUUID');

  // ✅ 從 localStorage 讀取舊 UUID
  const uuidFromLocalStorage = localStorage.getItem('uuid');

  let uuidFinal: string | null = null;

  // ✅ 優先級決策
  // 1️⃣ 若 query 中 pid 合法，用它並更新 localStorage
  if (pidFromQuery && isValidUUID(pidFromQuery)) {
    uuidFinal = pidFromQuery;
    localStorage.setItem('uuid', pidFromQuery);
    console.log('[UUID DEBUG] pid_from_query=', pidFromQuery);
    console.log('[UUID DEBUG] uuid_from_localStorage=', uuidFromLocalStorage);
    console.log('[UUID DEBUG] FINAL_UUID=', uuidFinal);
    return {
      uuid_final: uuidFinal,
      pid_from_query: pidFromQuery,
      uuid_from_localStorage: uuidFromLocalStorage,
    };
  }

  // 2️⃣ 否則，若 localStorage uuid 合法，使用它
  if (uuidFromLocalStorage && isValidUUID(uuidFromLocalStorage)) {
    uuidFinal = uuidFromLocalStorage;
    console.log('[UUID DEBUG] pid_from_query=', pidFromQuery);
    console.log('[UUID DEBUG] uuid_from_localStorage=', uuidFromLocalStorage);
    console.log('[UUID DEBUG] FINAL_UUID=', uuidFinal);
    return {
      uuid_final: uuidFinal,
      pid_from_query: pidFromQuery,
      uuid_from_localStorage: uuidFromLocalStorage,
    };
  }

  // 3️⃣ 都不合法，生成新 UUID 並存入 localStorage
  const newUUID = crypto.randomUUID();
  localStorage.setItem('uuid', newUUID);
  uuidFinal = newUUID;
  console.log('[UUID DEBUG] pid_from_query=', pidFromQuery);
  console.log('[UUID DEBUG] uuid_from_localStorage=', uuidFromLocalStorage);
  console.log('[UUID DEBUG] FINAL_UUID=', uuidFinal, '(newly generated)');

  return {
    uuid_final: uuidFinal,
    pid_from_query: pidFromQuery,
    uuid_from_localStorage: uuidFromLocalStorage,
  };
}

// ✅ 全局變數存儲 FINAL_UUID（確保整個 session 內唯一）
let GLOBAL_UUID_INFO: UUIDInfo | null = null;

/**
 * 獲取已決定的 FINAL_UUID 信息
 * 若尚未決定，先調用 resolveFinalUUID()
 */
export function getFinalUUIDInfo(): UUIDInfo {
  if (!GLOBAL_UUID_INFO) {
    GLOBAL_UUID_INFO = resolveFinalUUID();
  }
  return GLOBAL_UUID_INFO;
}

/**
 * 只在測試時重置（不應在生產環境用）
 */
export function resetUUIDInfo(): void {
  GLOBAL_UUID_INFO = null;
}
