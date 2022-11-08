/**
 * Creates a validation functions that validates the size of a file list.
 *
 * @param requirement The maximum size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function maxFiles(
  requirement: number,
  error: string
): (value: FileList | null | undefined) => string {
  return (value: FileList | null | undefined) =>
    (value?.length || 0) > requirement ? error : '';
}
