#!/bin/bash

# @Author: Colin Osterhout <ctosterhout>
# @Date:   2018-09-12T08:34:42-08:00
# @Email:  ctosterhout@alaska.edu
# @Last modified by:   ctosterhout
# @Last modified time: 2018-09-12T09:38:35-08:00
# @License: Released under MIT License. Copyright 2017 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT

DIR_XALANJ=/opt/local/share/java
XSLT=$1
shift
INPUT_XML=$1
shift
export CLASSPATH=$DIR_XALANJ/xalan.jar:$DIR_XALANJ/xml-apis.jar:$DIR_XALANJ/serializer.jar:$DIR_XALANJ/xercesImpl.jar:$DIR_XALANJ/bsf.jar:$DIR_XALANJ/js.jar:$DIR_XALANJ/commons-logging-1.2.jar
PARAMSTRING="sEnableDebugMessages true $@"
java org.apache.xalan.xslt.Process -in $INPUT_XML -xsl $XSLT -PARAM $PARAMSTRING
