import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Suffix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  suffix?: JSX.Element
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ suffix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        <Input ref={ref} {...props} />
        {!!suffix && <Suffix>{suffix}</Suffix>}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
