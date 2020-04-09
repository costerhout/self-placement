#!/bin/bash

# @Author: Colin Osterhout <ctosterhout>
# @Date:   2018-09-12T08:33:39-08:00
# @Email:  ctosterhout@alaska.edu
# @Last modified by:   ctosterhout
# @Last modified time: 2020-02-18T11:32:49-09:00
# @License: Released under MIT License. Copyright 2017 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT

DIRSCRIPT=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
DIRSRC=$DIRSCRIPT/../sample-data
DIRBIN=$DIRSCRIPT/../bin
DIRTARGET=$DIRSCRIPT/../dev/template-parameters
DIRXSLT=$DIRSCRIPT/../dev/xslt
XALANJ=$DIRSCRIPT/xalanj.sh
PACKAGE=$( basename `pwd` )

# Create the target directory
mkdir -p $DIRTARGET

# Switch over to the source directory
pushd $DIRSRC > /dev/null

# Begin iteration through all XML source directories
for dir in *; do
  if [ -d $dir ]; then
    # The source XSLT stylesheet to use is the same as the directory name
    XSLT=${dir}.xslt

    # Walk through all source XML files, generating one HTML output file for each input file
    #  with the same base name as the XML input file
    for SRC in $dir/*.xml; do
      TARGET=$DIRTARGET/$(basename $(echo $SRC | sed -e 's/\.xml/.html/'))
      echo -n "Generating ${TARGET} from ${SRC}..."
      $XALANJ $DIRXSLT/$XSLT $SRC > $TARGET
      echo "Done."
    done
  fi
done

# Get back JoJo.
popd > /dev/null
