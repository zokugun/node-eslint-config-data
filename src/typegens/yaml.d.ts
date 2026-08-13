/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * require or disallow block style mappings.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html
   */
  'yaml/block-mapping'?: Linter.RuleEntry<YamlBlockMapping>
  /**
   * enforce consistent line breaks after `:` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html
   */
  'yaml/block-mapping-colon-indicator-newline'?: Linter.RuleEntry<YamlBlockMappingColonIndicatorNewline>
  /**
   * enforce consistent line breaks after `?` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html
   */
  'yaml/block-mapping-question-indicator-newline'?: Linter.RuleEntry<YamlBlockMappingQuestionIndicatorNewline>
  /**
   * require or disallow block style sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html
   */
  'yaml/block-sequence'?: Linter.RuleEntry<YamlBlockSequence>
  /**
   * enforce consistent line breaks after `-` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html
   */
  'yaml/block-sequence-hyphen-indicator-newline'?: Linter.RuleEntry<YamlBlockSequenceHyphenIndicatorNewline>
  /**
   * enforce YAML file extension
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html
   */
  'yaml/file-extension'?: Linter.RuleEntry<YamlFileExtension>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
   */
  'yaml/flow-mapping-curly-newline'?: Linter.RuleEntry<YamlFlowMappingCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
   */
  'yaml/flow-mapping-curly-spacing'?: Linter.RuleEntry<YamlFlowMappingCurlySpacing>
  /**
   * enforce linebreaks after opening and before closing flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
   */
  'yaml/flow-sequence-bracket-newline'?: Linter.RuleEntry<YamlFlowSequenceBracketNewline>
  /**
   * enforce consistent spacing inside flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
   */
  'yaml/flow-sequence-bracket-spacing'?: Linter.RuleEntry<YamlFlowSequenceBracketSpacing>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
   */
  'yaml/indent'?: Linter.RuleEntry<YamlIndent>
  /**
   * enforce naming convention to key names
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html
   */
  'yaml/key-name-casing'?: Linter.RuleEntry<YamlKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in mapping pairs
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
   */
  'yaml/key-spacing'?: Linter.RuleEntry<YamlKeySpacing>
  /**
   * disallow boolean mapping keys
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-boolean-key.html
   */
  'yaml/no-boolean-key'?: Linter.RuleEntry<[]>
  /**
   * disallow empty document
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html
   */
  'yaml/no-empty-document'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping keys
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html
   */
  'yaml/no-empty-key'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping values
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html
   */
  'yaml/no-empty-mapping-value'?: Linter.RuleEntry<[]>
  /**
   * disallow empty sequence entries
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html
   */
  'yaml/no-empty-sequence-entry'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
   */
  'yaml/no-irregular-whitespace'?: Linter.RuleEntry<YamlNoIrregularWhitespace>
  /**
   * disallow multiple empty lines
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
   */
  'yaml/no-multiple-empty-lines'?: Linter.RuleEntry<YamlNoMultipleEmptyLines>
  /**
   * disallow tabs for indentation.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
   */
  'yaml/no-tab-indent'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing whitespace at the end of lines
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-spaces.html
   */
  'yaml/no-trailing-spaces'?: Linter.RuleEntry<YamlNoTrailingSpaces>
  /**
   * disallow trailing zeros for floats
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html
   */
  'yaml/no-trailing-zeros'?: Linter.RuleEntry<[]>
  /**
   * require or disallow plain style scalar.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html
   */
  'yaml/plain-scalar'?: Linter.RuleEntry<YamlPlainScalar>
  /**
   * enforce the consistent use of either double, or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
   */
  'yaml/quotes'?: Linter.RuleEntry<YamlQuotes>
  /**
   * disallow mapping keys other than strings
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html
   */
  'yaml/require-string-key'?: Linter.RuleEntry<[]>
  /**
   * require mapping keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
   */
  'yaml/sort-keys'?: Linter.RuleEntry<YamlSortKeys>
  /**
   * require sequence values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html
   */
  'yaml/sort-sequence-values'?: Linter.RuleEntry<YamlSortSequenceValues>
  /**
   * enforce consistent spacing after the `#` in a comment
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
   */
  'yaml/spaced-comment'?: Linter.RuleEntry<YamlSpacedComment>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html
   */
  'yaml/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- yaml/block-mapping -----
type YamlBlockMapping = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yaml/block-mapping-colon-indicator-newline -----
type YamlBlockMappingColonIndicatorNewline = []|[("always" | "never")]
// ----- yaml/block-mapping-question-indicator-newline -----
type YamlBlockMappingQuestionIndicatorNewline = []|[("always" | "never")]
// ----- yaml/block-sequence -----
type YamlBlockSequence = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yaml/block-sequence-hyphen-indicator-newline -----
type YamlBlockSequenceHyphenIndicatorNewline = []|[("always" | "never")]|[("always" | "never"), {
  nestedHyphen?: ("always" | "never")
  blockMapping?: ("always" | "never")
}]
// ----- yaml/file-extension -----
type YamlFileExtension = []|[{
  extension?: ("yaml" | "yml")
  caseSensitive?: boolean
}]
// ----- yaml/flow-mapping-curly-newline -----
type YamlFlowMappingCurlyNewline = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]
// ----- yaml/flow-mapping-curly-spacing -----
type YamlFlowMappingCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- yaml/flow-sequence-bracket-newline -----
type YamlFlowSequenceBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- yaml/flow-sequence-bracket-spacing -----
type YamlFlowSequenceBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- yaml/indent -----
type YamlIndent = []|[number]|[number, {
  indentBlockSequences?: boolean
  indicatorValueIndent?: number
  alignMultilineFlowScalars?: boolean
}]
// ----- yaml/key-name-casing -----
type YamlKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]
// ----- yaml/key-spacing -----
type YamlKeySpacing = []|[({
  align?: (("colon" | "value") | {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      on?: ("colon" | "value")
      mode?: ("strict" | "minimum")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- yaml/no-irregular-whitespace -----
type YamlNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipQuotedScalars?: boolean
}]
// ----- yaml/no-multiple-empty-lines -----
type YamlNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- yaml/no-trailing-spaces -----
type YamlNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- yaml/plain-scalar -----
type YamlPlainScalar = []|[("always" | "never")]|[("always" | "never"), {
  ignorePatterns?: string[]
  overrides?: {
    mappingKey?: ("always" | "never" | null)
  }
}]
// ----- yaml/quotes -----
type YamlQuotes = []|[{
  prefer?: ("double" | "single")
  avoidEscape?: boolean
}]
// ----- yaml/sort-keys -----
type YamlSortKeys = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: ({
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    } | {
      type: "ignore"
    })
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  } | {
    type: "ignore"
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: ({
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    } | {
      type: "ignore"
    })
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  } | {
    type: "ignore"
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])
// ----- yaml/sort-sequence-values -----
type YamlSortSequenceValues = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
      key?: string
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
    key?: string
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
      key?: string
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
    key?: string
  })
  minValues?: number
})[]]
// ----- yaml/spaced-comment -----
type YamlSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]
