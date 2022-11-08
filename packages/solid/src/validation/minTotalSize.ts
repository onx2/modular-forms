/**
 * Creates a validation functions that validates total file size of a file list.
 *
 * @param requirement The minimum size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minTotalSize(
  requirement: number,
  error: string
): (value: FileList | null | undefined) => string {
  return (value: FileList | null | undefined) =>
    [...(value || [])].reduce((size, file) => size + file.size, 0) < requirement
      ? error
      : '';
}
