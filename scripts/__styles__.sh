#!/bin/bash

# Disbale rule to check variable exports
# https://github.com/koalaman/shellcheck/wiki/SC2034
# shellcheck disable=SC2034

# Default Styles
readonly N='\033[0m' # Normal
readonly B='\033[1m' # Bold
readonly U='\033[4m' # Underline

readonly RED='\033[0;31m'
readonly B_RED='\033[1;31m'

readonly GREEN='\033[0;32m'
readonly B_GREEN='\033[1;32m'

readonly YELLOW='\033[0;33m'
readonly B_YELLOW='\033[1;33m'

readonly PURPLE='\033[0;35m'
readonly B_PURPLE='\033[1;35m'

# Utils
readonly SUCCESS="${B_GREEN}✅ Done:${N}"
readonly ERROR="${B_RED}❌ Error:${N}"
