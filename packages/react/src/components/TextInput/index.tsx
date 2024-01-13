import { ComponentProps } from 'react'
import { Input, Suffix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  suffix?: JSX.Element
}

export function TextInput({ suffix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      <Input {...props} />
      {!!suffix && <Suffix>{suffix}</Suffix>}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
