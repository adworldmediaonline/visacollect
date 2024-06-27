'use client';
import Image from 'next/image';
import Dropzone from 'react-dropzone';
import { Field, FieldArray, useFormikContext } from 'formik';
import { cn } from '@/lib/cn';
import { FiDelete, FiUpload } from 'react-icons/fi';
import { IoMdAddCircle, IoMdCloseCircle } from 'react-icons/io';
import { BsQuestionCircleFill } from 'react-icons/bs';

export default function DropzoneFileUpload({
  fieldName,
  uploadLabel,
  labelSection,
  tooltipContent,
  multiple = false,
}) {
  const { errors, setFieldValue, values } = useFormikContext();

  // Ensure the field is an array
  if (!Array.isArray(values[fieldName])) {
    setFieldValue(fieldName, []);
  }

  console.log(values[fieldName]);

  return (
    <>
      <div className="flex flex-col gap-3 my-5">
        <div className="flex items-center gap-3">
          <div className="label-section">
            <label>{labelSection}</label>
          </div>
          <div className="mark-section group shrink-0">
            <BsQuestionCircleFill className=" side-icon" size={20} />
            <div className="tooltip-content">{tooltipContent}</div>
          </div>
        </div>
        <div>
          <FieldArray
            name={fieldName}
            render={arrayHelpers => (
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {values[fieldName]?.length > 0 &&
                  values[fieldName].map((file, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-md shadow-md aspect-square"
                    >
                      <Image
                        src={file.preview}
                        alt={`file-${index}`}
                        fill
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                        className="object-cover w-full h-full rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="absolute top-0 right-0 m-2 bg-red-700 rounded-full group hover:bg-red-500"
                      >
                        <IoMdCloseCircle
                          className="w-8 h-8 group-hover:text-white"
                          color="#fff"
                        />
                      </button>
                    </div>
                  ))}
              </div>
            )}
          />
        </div>
        <div className="relative">
          <Dropzone
            accept="image/*"
            onDrop={acceptedFiles => {
              const newFiles = acceptedFiles.map(file =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              );

              if (!multiple) {
                setFieldValue(fieldName, newFiles);
              } else {
                setFieldValue(fieldName, [...values[fieldName], ...newFiles]);
              }
            }}
            multiple={multiple}
            maxSize={5000000}
            maxFiles={multiple ? undefined : 1}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className: cn(
                    'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer  border-2 border-gray-300 border-dashed shadow-sm h-32 bg-[#f8f8fa]'
                  ),
                })}
              >
                <div className="flex flex-col items-center mt-2 mb-2 gap-x-3 ">
                  <FiUpload className="w-8 h-8 text-slate-400" />{' '}
                  <p class="mb-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <label
                    htmlFor={fieldName}
                    className={`text-sm flex flex-col justify-center items-center text-[7E8DA0] cursor-pointer focus:outline-none focus:underline  ${
                      errors[fieldName] && 'text-red-500'
                    }`}
                    tabIndex={0}
                  >
                    <span className="text-center">
                      {uploadLabel ?? 'Add your Image'}
                    </span>
                    <input {...getInputProps()} />
                  </label>
                </div>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </>
  );
}
