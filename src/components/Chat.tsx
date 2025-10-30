import React, { FormEvent } from "react";

import { useForm } from "../hooks/useForm";

import { BotProfile } from "./BotProfile";
import { XIcon } from "./Icons/XIcon";
import { ArrowIcon } from "./Icons/ArrowIcon";

import { Message } from "./Message";

interface FromValues {
  message: string;
}

interface ChatProps {
  onMessageSent: ({}: FromValues) => void;
}

export const Chat: React.FC<ChatProps> = ({ onMessageSent }) => {
  const { values, handleChange } = useForm<FromValues>({
    message: "",
  });

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onMessageSent(values);
  };

  return (
    <dialog
      className="lg:absolute left-auto lg:right-4 lg:bottom-4 w-[380px] bg-transparent flex flex-col text-text-primary"
      open
    >
      <div className="bg-base-tertiary flex justify-between p-3 rounded-t-md">
        <figure className="flex items-center gap-3">
          <BotProfile
            backgroundClassName="w-8 bg-text-primary"
            iconClassName="fill-text-tertiary"
          />
          <figcaption>AI Assistant</figcaption>
        </figure>
        <button className="w-8 aspect-square flex items-center justify-center">
          <XIcon className="w-4 aspect-square fill-text-primary" />
        </button>
      </div>
      <div className="grow bg-base-primary">
        <ul className="h-[512px] overflow-y-scroll p-1 scrollbar mr-1 flex flex-col gap-2">
          <Message
            isSender={false}
            content="Hello! What can I do for you today?"
            shouldDisplayProfile={true}
          />
          <Message
            isSender={true}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas nunc, non vehicula nisi. Suspendisse faucibus ipsum ut pulvinar placerat. Nunc lectus leo, scelerisque sed finibus nec, pretium in nisl. Sed interdum risus a risus gravida, nec dapibus dolor tincidunt. Aliquam molestie velit orci, nec pellentesque est consectetur id. Sed odio mi, volutpat aliquet ipsum eget, consequat vestibulum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Maecenas eget turpis vel nulla finibus blandit vitae non neque. Donec id tincidunt eros. Nunc metus urna, interdum quis urna quis, lobortis dapibus nisl. Aenean aliquet feugiat vulputate. Nunc tristique mauris non nibh rhoncus commodo. Curabitur rutrum nulla magna, sit amet mollis odio mattis ut. Fusce id purus nisl. In hac habitasse platea dictumst. Suspendisse commodo risus vulputate urna iaculis, ut maximus lectus lobortis.

Integer eu viverra orci, sit amet mollis lorem. Nam molestie in nunc a facilisis. Morbi enim lectus, tempor non molestie vitae, varius quis libero. Cras commodo sapien quis tortor finibus rutrum. Cras finibus commodo placerat. Ut a lacus eu magna convallis bibendum. Pellentesque faucibus, dolor at semper dignissim, urna justo pellentesque elit, vitae scelerisque nunc dolor ut arcu. Maecenas blandit risus quis felis efficitur, id rhoncus massa facilisis. Suspendisse odio nisl, aliquam ac ligula in, semper viverra ipsum. In dictum in orci eget varius. Curabitur ut ipsum nec nunc consectetur vehicula. Nulla velit dui, pellentesque in neque sed, pretium imperdiet risus. Suspendisse nisl elit, feugiat in nisl ut, commodo semper tellus. Vestibulum commodo neque eu tristique luctus. In velit leo, vehicula ac arcu sed, pharetra volutpat felis.

Sed luctus dui ac dapibus auctor. Donec blandit ullamcorper metus a facilisis. Integer interdum ex a interdum ultrices. Fusce commodo sollicitudin volutpat. In blandit eu nisl quis aliquam. Pellentesque a quam in neque consectetur porta. Integer erat purus, posuere eu commodo at, consequat id dui. Suspendisse vel porta metus. Sed placerat tempus imperdiet.

Curabitur et lorem efficitur, bibendum odio a, posuere magna. Nullam in quam vitae magna mollis rutrum. Donec felis nisl, ullamcorper eget nisi a, sagittis vulputate neque. Vivamus interdum massa a tellus rhoncus luctus. Nulla facilisi. Curabitur tellus ante, facilisis eget tempor quis, condimentum sed ante. Curabitur quis bibendum libero. Vivamus tristique augue eget velit pulvinar malesuada."
            shouldDisplayProfile={false}
          />
        </ul>
      </div>
      <div className="p-2 rounded-b-md bg-base-tertiary">
        <form
          className="p-2 pl-4 rounded-sm bg-base-primary flex items-center justify-between"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Type message..."
            className="placeholder:text-text-secondary text-text-primary text-xs"
            onChange={handleChange}
            value={values.message || ""}
            required
          />
          <button type="submit">
            <ArrowIcon className="h-5.5 fill-text-primary" />
          </button>
        </form>
      </div>
    </dialog>
  );
};
