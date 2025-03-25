import { X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { addContent } from "./AddContentApi";

interface AddContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddContent = ({ isOpen, onClose }: AddContentProps) => {
  const [content, setContent] = useState({
    title : "",
    description : ""
  })
  const navigate = useNavigate();

  if (!isOpen) return null;

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log({ title, heading, description });
  //   onClose();
  // };
 
  const onHandleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    const response = await addContent(content)
    if(response) {
     console.log('Content added succesfully')
      setContent({ title: "", description : "" });
      onClose();
      navigate('/Note')
    }

  }

  const handleClose = () => {
    navigate('/Note');
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Content</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-gray-700" onClick={handleClose} />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              onChange={(e) => setContent({...content, title : e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              onChange={(e) => setContent({ ...content, description: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={4}
              placeholder="Enter description"
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onHandleSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-[#4843de] rounded-md hover:bg-[#3e38a7]"
            >
              Add Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};